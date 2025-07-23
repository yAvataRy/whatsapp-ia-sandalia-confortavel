import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, MessageCircle, Clock, Zap, Users, TrendingUp, Phone, Globe, Bot, Smartphone } from 'lucide-react'
import iaBrainImage from './assets/images/ia_brain.jpg'
import iaRobotImage from './assets/images/ia_robot.webp'
import automationImage from './assets/images/automation.png'
import whatsappLogo from './assets/images/whatsapp_logo.png'

function App() {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5511916720503', '_blank')
  }

  const handleWebsiteContact = () => {
    window.open('https://bravvaglow.com.br', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Agente IA WhatsApp</h1>
                <p className="text-sm text-gray-600">Automação Inteligente</p>
              </div>
            </div>
            <Button onClick={handleWhatsAppContact} className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
              🤖 Projeto Personalizado para Sandália Confortável
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Agente de Atendimento 
              <span className="text-green-600"> Inteligente</span> via WhatsApp
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automatize seu atendimento com Inteligência Artificial, aumente suas vendas e melhore a experiência do cliente 24h por dia, 7 dias por semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Proposta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWebsiteContact}
                className="text-lg px-8 py-3"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visitar Site
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Está perdendo vendas por falta de atendimento?
            </h2>
            <p className="text-lg text-gray-600">
              Muitos negócios perdem oportunidades valiosas quando não conseguem responder rapidamente aos clientes no WhatsApp.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-600">Demora nas Respostas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Clientes desistem quando não recebem resposta rápida</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-600">Equipe Sobrecarregada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Funcionários não conseguem atender todos os contatos</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-600">Vendas Perdidas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Oportunidades de negócio escapam fora do horário comercial</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🎯 Objetivo do Projeto
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <img src={iaBrainImage} alt="Inteligência Artificial" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automatização Inteligente</h3>
                <p>Responder dúvidas frequentes, coletar pedidos e funcionar 24h por dia com IA avançada.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <img src={automationImage} alt="Automação" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-3">Atendimento Contínuo</h3>
                <p>Integração com ChatGPT para respostas naturais e redirecionamento inteligente para humanos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🧠 O que será entregue
            </h2>
            <p className="text-lg text-gray-600">
              Solução completa de automação com inteligência artificial
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8 text-green-500" />,
                title: "Instalação e Configuração",
                description: "Plataforma de automação (n8n) totalmente configurada"
              },
              {
                icon: <Bot className="w-8 h-8 text-blue-500" />,
                title: "Integração com IA",
                description: "GPT integrado para respostas inteligentes e naturais"
              },
              {
                icon: <Smartphone className="w-8 h-8 text-green-500" />,
                title: "WhatsApp API",
                description: "Integração completa com seu número oficial"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
                title: "Fluxos Personalizados",
                description: "Saudação, FAQ, coleta de pedidos e redirecionamento"
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "Treinamento Básico",
                description: "Capacitação para uso e sugestões de melhoria"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                title: "Suporte Inicial",
                description: "7 dias de acompanhamento com ajustes gratuitos"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              💻 Requisitos Técnicos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Smartphone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>WhatsApp Ativo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Um número de WhatsApp ativo para integração</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Bot className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Conta IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Conta em plataforma de IA (OpenAI) - vou configurar para você</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Plataforma 24h</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Plataforma de automação rodando 24 horas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              💰 Investimento
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white">Setup Inicial</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">Configuração Completa</CardTitle>
                  <div className="text-4xl font-bold text-green-600 mt-4">
                    R$ 600,00
                  </div>
                  <CardDescription>Pagamento único</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Setup e configuração completa
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Integração com IA e WhatsApp
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Fluxos personalizados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Treinamento básico
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      7 dias de suporte gratuito
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Suporte Contínuo</Badge>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">Suporte Mensal</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    R$ 300,00
                  </div>
                  <CardDescription>Por mês (6 a 12 meses)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Hospedagem incluída
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Atualizações regulares
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Melhorias contínuas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Acompanhamento técnico
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Suporte prioritário
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Costs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
              📊 Custos Mensais da Infraestrutura
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Custos pagos diretamente pelo cliente aos provedores
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Smartphone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>WhatsApp Business API</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    R$ 20 - R$ 50
                  </div>
                  <p className="text-gray-600">por mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Bot className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>IA Generativa (GPT-3.5)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    R$ 15 - R$ 50
                  </div>
                  <p className="text-gray-600">por mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Zap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>VPS (caso hospede)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    R$ 25 - R$ 40
                  </div>
                  <p className="text-gray-600">por mês</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              📈 Benefícios para sua loja
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Clock className="w-8 h-8 text-green-500" />,
                  title: "Atendimento 24h",
                  description: "Respostas automáticas e profissionais a qualquer hora do dia"
                },
                {
                  icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
                  title: "Fora do Horário Comercial",
                  description: "Atendimento mesmo quando sua equipe não está disponível"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
                  title: "Melhoria da Marca",
                  description: "Imagem profissional e moderna para seu negócio"
                },
                {
                  icon: <Zap className="w-8 h-8 text-orange-500" />,
                  title: "Redução de Perdas",
                  description: "Menos vendas perdidas por falta de resposta rápida"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                  title: "Maior Conversão",
                  description: "Aumento da taxa de conversão via WhatsApp"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-500" />,
                  title: "Equipe Otimizada",
                  description: "Sua equipe foca em atendimentos mais complexos"
                }
              ].map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {benefit.icon}
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📞 Vamos conversar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Estou à disposição para ajustar essa proposta às suas necessidades e dar início ao projeto o quanto antes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWebsiteContact}
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visitar Site
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img src={iaRobotImage} alt="IA Robot" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-2xl font-bold mb-2">Vinícius Lima</h3>
              <p className="text-gray-400 mb-4">Desenvolvedor Web e Especialista em Automação</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 hover:bg-green-600"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  11 9 1672-0503
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleWebsiteContact}
                  className="border-gray-600 text-white hover:bg-gray-800"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  bravvaglow.com.br
                </Button>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Vinícius Lima. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

