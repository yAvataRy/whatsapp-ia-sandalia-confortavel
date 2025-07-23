# ========================================
# 📦 Makefile para facilitar o uso do Git
# ========================================

# -------------------------
# COMO INICIAR UM NOVO REPOSITÓRIO GIT
# -------------------------
# 1. make init
# 2. make set-origin           # Usa a URL com alias SSH (github-yavatary)
# 3. make commit/main msg="mensagem"
#
# 🧠 Obs: se você usa múltiplas contas no GitHub com chaves diferentes,
# configure o arquivo ~/.ssh/config e use um Host personalizado (ex: github-yavatary)
# para garantir que o Git use a chave certa.
#
# Exemplo de entrada em ~/.ssh/config:
# 
#   Host github-yavatary
#     HostName github.com
#     User git
#     IdentityFile ~/.ssh/id_ed25519_yavatary
#     IdentitiesOnly yes

# -------------------------
# COMANDOS DISPONÍVEIS
# -------------------------
# make init                  # Inicia repositório e branch main
# make set-origin            # Define origin com alias SSH da conta pessoal
# make origin                # Mostra a URL remota atual
# make commit/main msg="..."# Adiciona, commita e envia para o branch main
# make ssh/gen               # Gera uma nova chave SSH
# make ssh/add               # Adiciona chave ao agente SSH
# make ssh/show              # Mostra a chave pública para copiar no GitHub
# make ssh/test              # Testa conexão com GitHub via alias
# make status                # Verifica status do git


# -------------------------------------
# INICIALIZAÇÃO E CONFIGURAÇÃO REMOTA
# -------------------------------------

# Inicia repositório local e branch main
init:
	git init
	git branch -M main

# Define origin usando o alias SSH da conta pessoal (github-yavatary)
set-origin:
	git remote set-url origin git@github-yavatary:yAvataRy/whatsapp-ia-sandalia-confortavel.git

# Mostra a URL atual configurada no origin
origin:
	git remote -v

# Verifica status atual dos arquivos
status:
	git status


# -------------------------
# COMMIT E PUSH
# -------------------------

# Valida que a variável "msg" está definida
ifndef msg
$(error ❌ Voce precisa passar a mensagem do commit usando: make commit/main msg="sua mensagem")
endif

# Commita e envia para o branch main
commit/main:
	git add .
	git commit -m "$(msg)"
	git push -u origin main

## git push -u origin main


# -------------------------
# CONFIGURAÇÃO DE CHAVE SSH
# -------------------------

# Gera nova chave SSH (só se você ainda não tem)
ssh/gen:
	ssh-keygen -t ed25519 -C "seu-email@exemplo.com"

# Adiciona a chave ao agente SSH
ssh/add:
	eval "$$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519_yavatary

# Mostra a chave pública para copiar e colar no GitHub
ssh/show:
	cat ~/.ssh/id_ed25519_yavatary.pub

# Testa a conexão com GitHub usando o alias personalizado
ssh/test:
	ssh -T git@github-yavatary
