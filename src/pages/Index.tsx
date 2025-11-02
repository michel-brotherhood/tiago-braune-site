import BookingForm from "@/components/BookingForm";
import logo from "@/assets/logo.png";
import { Brain, Sparkles, Heart, Target, Clock, Shield, CheckCircle2, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('agendamento');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8 md:mb-12 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src={logo} 
                  alt="Tiago Braune - Hipnoterapia e Psicologia" 
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Hipnoterapia Clínica e
              <span className="block mt-2 md:mt-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Psicologia Comportamental
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 animate-fade-in max-w-3xl mx-auto leading-relaxed">
              Ciência, técnica e resultados reais para transformar sua vida
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button onClick={scrollToBooking} size="lg" className="text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Agende sua Consulta
              </Button>
              <Button onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" className="text-base md:text-lg px-8 py-6">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-y bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+10</div>
              <div className="text-sm md:text-base text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">Base Científica</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4h</div>
              <div className="text-sm md:text-base text-muted-foreground">Primeira Sessão</div>
            </div>
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">CRP</div>
              <div className="text-sm md:text-base text-muted-foreground">Psicólogo Registrado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ciência, Técnica e <span className="text-primary">Resultados Reais</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            <Card className="p-8 md:p-10 mb-8 border-none shadow-lg bg-card/80 backdrop-blur">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Sou <strong className="text-foreground">Tiago Braune</strong>, hipnoterapeuta com mais de 10 anos de experiência e psicólogo formado por uma das melhores universidades do Rio de Janeiro.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Minha trajetória é pautada pela união de <strong className="text-foreground">ciência, técnica e resultados reais</strong>. Desde o início, fundamentei minhas sessões de hipnoterapia nas bases sólidas da Terapia Cognitivo-Comportamental (TCC). Hoje, continuo a aprofundar meus estudos em neurociência, nutrição e fisiologia para oferecer uma abordagem cada vez mais completa, moderna e eficaz.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 md:p-8 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <Target className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">Objetivo Principal</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Proporcionar alívio rápido das dores emocionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Garantir autonomia total do paciente</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 md:p-8 border-l-4 border-l-secondary hover:shadow-lg transition-all">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">Abordagem Científica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Terapia comportamental com hipnose clínica. <strong className="text-foreground">Não há nada de místico, perigoso ou placebo.</strong> É ciência aplicada com resultados reais.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Como Funciona o <span className="text-primary">Processo</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Um plano terapêutico personalizado que alinha consciência, ação e resultado
              </p>
            </div>

            <Card className="p-8 md:p-10 mb-12 border-none shadow-xl bg-gradient-to-br from-card via-card to-primary/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">A Primeira Sessão</h3>
                  <p className="text-primary font-semibold">Aproximadamente 4 horas</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A primeira sessão é a mais importante de todo o processo terapêutico. Dedicamos tempo para compreender profundamente sua história e construir as bases da transformação.
              </p>

              <div className="grid gap-6">
                <div className="flex gap-4 p-5 rounded-lg bg-background/50 border hover:border-primary/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Anamnese Detalhada</h4>
                    <p className="text-sm text-muted-foreground">Ouvir atentamente as principais queixas e a história de vida do paciente</p>
                    <span className="text-xs text-primary font-medium mt-1 inline-block">Compreensão e Acolhimento</span>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-lg bg-background/50 border hover:border-primary/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mapeamento Comportamental</h4>
                    <p className="text-sm text-muted-foreground">Construir um mapa mental e comportamental, identificando padrões, causas e objetivos</p>
                    <span className="text-xs text-primary font-medium mt-1 inline-block">Diagnóstico e Estratégia</span>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-lg bg-background/50 border hover:border-primary/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ancoragem Terapêutica</h4>
                    <p className="text-sm text-muted-foreground">Aplicação de testes e exercícios específicos com Hipnose Clínica para consolidar o trabalho</p>
                    <span className="text-xs text-secondary font-medium mt-1 inline-block">Transformação Profunda</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm md:text-base text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary inline mr-2" />
                  <strong>Resultados Imediatos:</strong> Já na primeira sessão, o paciente costuma perceber melhoras significativas.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                O que Posso <span className="text-primary">Transformar</span> na sua Vida?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Abordagem eficiente e moderna focada no fortalecimento de novos processos mentais, químicos, biológicos e comportamentais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 md:p-8 hover:shadow-xl transition-all border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">Transtornos de Ansiedade</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Ansiedade Generalizada (TAG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Síndrome do Pânico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Fobias (específicas e sociais)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Estresse Pós-Traumático (TEPT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Transtorno Obsessivo Compulsivo (TOC)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-xl transition-all border-l-4 border-l-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">Transtornos do Humor</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Depressão (leve a moderada)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Distimia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Luto</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-muted-foreground italic">
                    Fortalecimento de novos padrões, ativação comportamental e resgate da autonomia emocional
                  </p>
                </div>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-xl transition-all border-l-4 border-l-accent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">Saúde e Bem-Estar</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">Insônia e distúrbios do sono</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">Controle da Dor Crônica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">Fibromialgia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">Problemas Gastrointestinais (SII)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-xl transition-all border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">Desenvolvimento Pessoal</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Tabagismo (parar de fumar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Compulsão Alimentar e Perda de Peso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Procrastinação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Baixa Autoestima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Falta de Foco e Concentração</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços e Valores */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Serviços e <span className="text-primary">Investimentos</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Processos terapêuticos personalizados com técnicas modernas de Psicologia, Hipnose Clínica e TCC
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-8 border-2 border-primary/20 hover:border-primary transition-all hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    MAIS COMPLETO
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Pacote Completo</h3>
                  <p className="text-sm text-muted-foreground mb-4">Terapia + Hipnose Clínica</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-primary">R$ 2.500</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>4 sessões (2 a 3 horas cada)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Transformações profundas e estruturadas</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Acompanhamento contínuo</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Pagamento à vista ou parcelado</span>
                    </li>
                  </ul>
                  <Button onClick={scrollToBooking} className="w-full" size="lg">
                    Agendar Agora
                  </Button>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-secondary/50 transition-all hover:shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Sessão Única</h3>
                <p className="text-sm text-muted-foreground mb-4">Hipnose Clínica Individual</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-secondary">R$ 850</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>1 sessão (2 a 4 horas)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Questões pontuais e específicas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Desbloqueios emocionais</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Inclui Anamnese e Avaliação</span>
                  </li>
                </ul>
                <Button onClick={scrollToBooking} variant="outline" className="w-full" size="lg">
                  Agendar Sessão
                </Button>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-foreground mb-2">Terapia Online Individual</h3>
                <p className="text-sm text-muted-foreground mb-3">Sessão de 1h30 a 2h</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">R$ 150</span>
                  <span className="text-sm text-muted-foreground">por sessão</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Acompanhamento psicológico contínuo, foco em autoconhecimento e tomada de decisões.
                </p>
                <p className="text-xs text-muted-foreground italic">Não inclui hipnose clínica</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-l-accent">
                <div className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded mb-2">
                  MELHOR CUSTO-BENEFÍCIO
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Pacote Online Mensal</h3>
                <p className="text-sm text-muted-foreground mb-3">4 sessões por mês (1h30 a 2h cada)</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-accent">R$ 500</span>
                  <span className="text-sm text-muted-foreground line-through">R$ 600</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Equilíbrio emocional e suporte constante com flexibilidade e praticidade.
                </p>
                <p className="text-xs text-muted-foreground italic">Não inclui hipnose clínica</p>
              </Card>
            </div>

            <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
              <div className="flex gap-3">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Reserva de Sessão</h4>
                  <p className="text-sm text-muted-foreground">
                    Para garantir a data do atendimento, é solicitado um sinal simbólico no momento da reserva. Este valor cobre a liberação do sistema de agendamento e a taxa administrativa da secretaria.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="agendamento" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Agende sua <span className="text-primary">Consulta</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Dê o primeiro passo para uma vida mais equilibrada e plena
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pronto para Transformar sua Vida?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Esta é uma terapia que liberta, e não que cria dependência. Você aprende a se entender, se fortalecer e se conduzir no próprio processo de evolução emocional.
            </p>
            <Button onClick={scrollToBooking} size="lg" className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all">
              Agende sua Primeira Sessão
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <img src={logo} alt="Tiago Braune" className="w-20 h-20 mb-4" />
                <p className="text-sm text-muted-foreground">
                  Hipnoterapia Clínica e Psicologia Comportamental baseada em ciência e resultados reais.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Atendimento</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Presencial no Rio de Janeiro</li>
                  <li>Online para todo o Brasil</li>
                  <li>CRP: [Número do Registro]</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Contato</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Preencha o formulário acima para agendar sua consulta
                </p>
              </div>
            </div>
            <div className="pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© 2024 Tiago Braune - Todos os direitos reservados</p>
              <p className="mt-2">Hipnoterapia Clínica e Psicologia Comportamental</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
