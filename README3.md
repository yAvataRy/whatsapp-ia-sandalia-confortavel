README: Configurando n8n Localmente com Ngrok para Integrações OAuth
Este README.md guiará você na configuração do n8n localmente, usando ngrok para expor sua instância à internet, o que é essencial para o funcionamento de integrações OAuth2 (como o Slack) e webhooks.

Pré-requisitos
n8n instalado localmente: Via npm (npm install -g n8n) ou npx.

ngrok instalado e autenticado: Baixe em ngrok.com e configure seu authtoken.

Conta no Slack (ou outro serviço OAuth2): Com permissões para criar e gerenciar aplicações/integrações.

1. Iniciar Ngrok e Obter a URL Pública
   Primeiro, inicie o ngrok para criar um túnel seguro para a porta do seu n8n (padrão 5678).

Bash

ngrok http 5678
O terminal do ngrok exibirá informações importantes. Anote a URL que aparece em Forwarding e começa com https://.

Exemplo: https://seualiasaleatorio.ngrok-free.app

Mantenha este terminal do ngrok aberto enquanto estiver usando o n8n.

2. Iniciar n8n com as Variáveis de Ambiente do Ngrok
   Para que o n8n saiba qual é a sua URL pública (a do ngrok), você precisa definir algumas variáveis de ambiente ao iniciá-lo. A sintaxe varia dependendo do seu terminal.

No PowerShell (Windows):

PowerShell

$env:WEBHOOK_URL="https://seualiasaleatorio.ngrok-free.app/"
$env:N8N_PROTOCOL="https"
$env:N8N_HOST="seualiasaleatorio.ngrok-free.app"
npx n8n
No CMD (Windows):

Bash

set WEBHOOK_URL=https://seualiasaleatorio.ngrok-free.app/
set N8N_PROTOCOL=https
set N8N_HOST=seualiasaleatorio.ngrok-free.app
npx n8n
No Bash/Zsh (Linux/macOS):

Bash

export WEBHOOK_URL="https://seualiasaleatorio.ngrok-free.app/"
export N8N_PROTOCOL="https"
export N8N_HOST="seualiasaleatorio.ngrok-free.app"
npx n8n
Substitua https://seualiasaleatorio.ngrok-free.app pela URL exata que o seu ngrok forneceu.

Mantenha este terminal do n8n aberto.

3. Configurar o Redirect URL na Aplicação do Slack (ou Serviço OAuth2)
   Com o n8n rodando e ciente da sua URL do ngrok, agora você precisa informar ao Slack (ou outro serviço) para onde ele deve redirecionar após uma autenticação bem-sucedida.

Acesse a interface do n8n em http://localhost:5678.

Vá para Credentials (Credenciais) no menu lateral esquerdo.

Edite (ou crie) sua credencial do Slack (ou do serviço que está usando).

O n8n exibirá o OAuth Redirect URL correto. Ele será parecido com:
https://seualiasaleatorio.ngrok-free.app/rest/oauth2-credential/callback

Copie esta URL completa.

Vá para o painel de gerenciamento da sua aplicação no Slack (geralmente api.slack.com/apps).

Selecione sua aplicação.

No menu lateral, clique em "OAuth & Permissions".

Na seção "Redirect URLs", adicione a URL que você copiou do n8n.

Clique em "Save URLs".

4. Testar a Conexão no n8n
   De volta ao n8n, na sua credencial do Slack, clique em "Connect to my account" (ou o botão de reautenticação). Agora, o processo de autenticação OAuth2 deve ser concluído com sucesso, e sua credencial estará conectada.

Makefile para Automação (Opcional)
Um Makefile é útil para automatizar comandos repetitivos. Ele não substitui o Docker Compose, mas pode ser um bom passo intermediário se você não quiser usar Docker ainda.

Crie um arquivo chamado Makefile (sem extensão) na raiz do seu projeto n8n (onde você executa npx n8n).

Makefile

.PHONY: start-ngrok start-n8n clean

NGROK_URL ?= $(shell ngrok http 5678 | grep -o 'https://[^ ]\*' | head -n 1)

start-ngrok:
@echo "Starting ngrok..."
ngrok http 5678

start-n8n:
@echo "Starting n8n with Ngrok URL: $(NGROK_URL)"
	@if [ "$(OS)" = "Windows_NT" ]; then \
 powershell -Command "$env:WEBHOOK_URL='$(NGROK_URL)/'; $env:N8N_PROTOCOL='https'; $env:N8N_HOST='$(shell echo $(NGROK_URL) | sed 's|^https://||; s|/$$||')'; npx n8n"; \
	else \
		WEBHOOK_URL="$(NGROK_URL)/" N8N_PROTOCOL="https" N8N_HOST="$(shell echo $(NGROK_URL) | sed 's|^https://||; s|/$$||')" npx n8n; \
 fi

run:
@echo "This command does not start ngrok and n8n in the same terminal for interactive use."
@echo "Please run 'make start-ngrok' in one terminal and then 'make start-n8n' in another."

# Para Linux/macOS, o comando 'grep -o 'https://[^ ]\*' | head -n 1' pega a URL.

# Para Windows, obter a URL do ngrok de forma automatizada no Makefile é mais complexo e pode exigir um script separado ou copiar manualmente.

# A variável NGROK_URL é um placeholder para o Makefile. Você ainda precisará da URL real.

# Para simplificar no Windows com Makefile:

# 1. Rode 'ngrok http 5678' em um terminal.

# 2. Copie a URL gerada.

# 3. Rode 'make start-n8n NGROK_URL="sua_url_ngrok"' em outro terminal, substituindo 'sua_url_ngrok'.

clean:
@echo "Stopping ngrok and n8n processes if running..."
@if [ "$(OS)" = "Windows_NT" ]; then \
 taskkill /F /IM ngrok.exe 2>nul || true; \
 taskkill /F /IM node.exe 2>nul || true; \
 else \
 pkill -f "ngrok http 5678" || true; \
 pkill -f "npx n8n" || true; \
 fi
Como usar o Makefile:

Abra um terminal e rode: make start-ngrok (isso iniciará o ngrok).

Abra outro terminal e, no mesmo diretório, rode: make start-n8n.

Importante para Windows: O Makefile tenta inferir o OS para usar powershell ou bash. A obtenção automática da URL do ngrok no Makefile é mais complexa no Windows. A maneira mais confiável para Windows é copiar a URL do ngrok manualmente e passá-la como argumento:
make start-n8n NGROK_URL="https://seualiasaleatorio.ngrok-free.app"

Quando terminar, você pode tentar make clean para parar os processos, mas pode precisar pará-los manualmente se o pkill ou taskkill não encontrar os processos exatos.
