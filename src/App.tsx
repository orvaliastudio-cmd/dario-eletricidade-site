/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  Wrench, 
  Factory, 
  Cpu, 
  Layout, 
  Search, 
  Check, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const enviarWA = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome") as string;
    const empresa = formData.get("empresa") as string;
    const tel = formData.get("telefone") as string;
    const serv = formData.get("servico") as string;
    const msg = formData.get("msg") as string;

    const texto = `Olá Dario! Meu nome é *${nome}*${empresa ? `, da empresa *${empresa}*` : ""}.
📞 Meu contato: ${tel}
🔧 Serviço: ${serv || "A definir"}
📝 ${msg || "Gostaria de solicitar um orçamento."}`;

    window.open("https://wa.me/5519997869520?text=" + encodeURIComponent(texto), "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-azul/92 backdrop-blur-md border-b border-laranja/15 px-8 h-[68px] flex items-center justify-between">
        <a href="#hero" className="font-condensed font-black text-2xl tracking-widest text-white no-underline">
          DARIO<span className="text-laranja">.</span>
        </a>
        
        <nav className="hidden md:flex gap-8">
          <a href="#servicos" className="font-condensed font-semibold text-[0.95rem] tracking-widest uppercase text-cinza hover:text-laranja transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="font-condensed font-semibold text-[0.95rem] tracking-widest uppercase text-cinza hover:text-laranja transition-colors">
            Sobre
          </a>
          <a href="#contato" className="bg-laranja text-azul2 px-5 py-1.5 rounded font-condensed font-bold text-[0.95rem] tracking-widest uppercase hover:bg-laranja2 transition-all hover:-translate-y-0.5">
            Falar com Dario
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-azul2 pt-[68px] flex flex-col items-center gap-8 md:hidden">
          <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="font-condensed font-semibold text-xl uppercase text-white">Serviços</a>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="font-condensed font-semibold text-xl uppercase text-white">Sobre</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="bg-laranja text-azul2 px-8 py-3 rounded font-condensed font-bold text-xl uppercase">Falar com Dario</a>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen bg-[linear-gradient(135deg,#071520_0%,#0B2545_55%,#0f3060_100%)] flex items-center overflow-hidden pt-[68px]">
        <div className="circuit-bg-svg">
          <svg viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="120" x2="300" y2="120" stroke="#F5A623" strokeWidth="1.5"/>
            <circle cx="300" cy="120" r="5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="305" y1="120" x2="400" y2="120" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="400" y1="120" x2="400" y2="220" stroke="#F5A623" strokeWidth="1.5"/>
            <circle cx="400" cy="220" r="4" fill="#F5A623"/>
            <line x1="400" y1="224" x2="400" y2="350" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="600" y1="0" x2="600" y2="180" stroke="#F5A623" strokeWidth="1.5"/>
            <circle cx="600" cy="180" r="5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="600" y1="185" x2="600" y2="300" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="600" y1="300" x2="750" y2="300" stroke="#F5A623" strokeWidth="1.5"/>
            <circle cx="750" cy="300" r="4" fill="#F5A623"/>
            <line x1="754" y1="300" x2="900" y2="300" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="900" y1="0" x2="900" y2="150" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="900" y1="150" x2="1100" y2="150" stroke="#F5A623" strokeWidth="1.5"/>
            <circle cx="1100" cy="150" r="5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="1100" y1="155" x2="1100" y2="400" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="0" y1="400" x2="200" y2="400" stroke="#F5A623" strokeWidth="1.5"/>
            <circle cx="200" cy="400" r="4" fill="#F5A623"/>
            <line x1="204" y1="400" x2="500" y2="400" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="500" y1="400" x2="500" y2="550" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="500" y1="550" x2="800" y2="550" stroke="#F5A623" strokeWidth="1.5"/>
            <circle cx="800" cy="550" r="5" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
            <line x1="805" y1="550" x2="1200" y2="550" stroke="#F5A623" strokeWidth="1.5"/>
            <rect x="350" y="200" width="50" height="30" rx="2" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
            <rect x="730" y="280" width="50" height="30" rx="2" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
            <rect x="1050" y="130" width="50" height="30" rx="2" fill="none" stroke="#F5A623" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="inline-block font-condensed font-bold text-[0.8rem] tracking-[0.2em] uppercase text-laranja border border-laranja/40 px-3.5 py-1.5 rounded-sm mb-5">
              ⚡ Eletricidade Industrial
            </div>
            <h1 className="font-condensed font-black text-5xl md:text-8xl leading-[0.95] tracking-tight mb-6">
              Sua produção<br />não para.<br />
              <em className="not-italic text-laranja block">Sua elétrica<br />também não.</em>
            </h1>
            <p className="text-lg text-cinza leading-relaxed max-w-[480px] mb-10">
              Manutenção elétrica industrial especializada para empresas de pequeno e médio porte que precisam de um parceiro técnico de confiança — sem improvisação, sem parada de linha.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/5519997869520" target="_blank" className="inline-flex items-center gap-2.5 bg-laranja text-azul2 font-condensed font-extrabold text-base tracking-wider uppercase px-8 py-3.5 rounded hover:bg-laranja2 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,166,35,0.35)]">
                <MessageCircle size={20} />
                Solicitar orçamento
              </a>
              <a href="#servicos" className="inline-flex items-center gap-2.5 border-1.5 border-cinza/40 text-cinza font-condensed font-bold text-base tracking-wider uppercase px-8 py-3.5 rounded hover:border-laranja hover:text-laranja transition-colors">
                Ver serviços
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="hidden md:flex justify-center items-center relative">
              <div className="bg-white/5 border border-laranja/20 rounded-xl p-8 backdrop-blur-sm w-full max-w-[400px] shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] animate-[float_5s_ease-in-out_infinite]">
                <div className="font-condensed text-[0.75rem] font-bold tracking-[0.18em] uppercase text-laranja mb-5">⚡ O que fazemos</div>
                {[
                  "Manutenção Preditiva e Preventiva",
                  "Comandos Elétricos",
                  "Instalações Elétricas",
                  "Automações Industriais",
                  "Montagem de Painéis Elétricos",
                  "Diagnóstico e Reparo de Máquinas"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-md bg-white/5 border border-cinza/10 mb-2 text-[0.92rem] text-texto hover:bg-laranja/10 hover:border-laranja/30 transition-all cursor-default">
                    <div className="w-2 h-2 rounded-full bg-laranja shadow-[0_0_6px_var(--color-laranja)]" />
                    {service}
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4.5 -right-4.5 bg-laranja text-azul2 rounded-full w-[90px] h-[90px] flex flex-col items-center justify-center font-condensed font-black text-center leading-none shadow-[0_8px_30px_rgba(245,166,35,0.4)] text-[0.72rem] tracking-wider uppercase">
                <strong className="text-2xl block">+15</strong> anos de<br />experiência
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="bg-gradient-to-b from-azul2 to-azul border-y border-laranja/12">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-0.5 bg-laranja/10 rounded-lg overflow-hidden">
              {[
                { num: "100%", label: "Foco em indústrias e empresas" },
                { num: "0", label: "Tolerância a paradas não planejadas" },
                { num: "24h", label: "Atendimento de urgência" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-azul p-10 text-center">
                  <div className="font-condensed font-black text-6xl text-laranja leading-none">{stat.num}</div>
                  <div className="text-[0.9rem] text-cinza mt-1.5 uppercase tracking-wider font-condensed font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-azul2">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <Reveal>
            <div className="font-condensed font-bold text-[0.75rem] tracking-[0.22em] uppercase text-laranja mb-2.5">O que oferecemos</div>
            <h2 className="font-condensed font-black text-4xl md:text-5xl leading-[1.05] mb-4">Serviços <span className="text-laranja">especializados</span><br />para sua operação</h2>
            <div className="w-15 h-[3px] bg-laranja rounded-sm mb-7" />
            <p className="text-cinza text-lg leading-relaxed max-w-[580px]">Do diagnóstico à execução, atuamos com técnica e agilidade para manter sua planta operando com segurança e eficiência.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { icon: <Wrench />, title: "Manutenção Preditiva e Preventiva", desc: "Planejamento e execução de inspeções periódicas para antecipar falhas antes que causem paradas de produção." },
              { icon: <Zap />, title: "Comandos Elétricos", desc: "Projeto, montagem e manutenção de sistemas de comando para acionamento de motores, válvulas e equipamentos industriais." },
              { icon: <Factory />, title: "Instalações Elétricas", desc: "Execução completa de instalações elétricas industriais, seguindo as normas técnicas e com total segurança operacional." },
              { icon: <Cpu />, title: "Automações", desc: "Automação de processos e equipamentos para aumentar produtividade, reduzir erros e eliminar trabalho manual repetitivo." },
              { icon: <Layout />, title: "Montagem de Painéis Elétricos", desc: "Desenvolvimento, montagem e instalação de painéis de controle e distribuição elétrica sob medida para sua necessidade." },
              { icon: <Search />, title: "Diagnóstico e Reparo de Máquinas", desc: "Identificação precisa de falhas elétricas em máquinas e equipamentos industriais com reparo rápido e eficiente." }
            ].map((s, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group relative bg-[linear-gradient(135deg,rgba(18,45,86,0.8)_0%,rgba(11,37,69,0.6)_100%)] border border-cinza/12 rounded-lg p-8 transition-all hover:-translate-y-1.5 hover:border-laranja/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-laranja scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  <div className="w-12 h-12 mb-5 bg-laranja/12 rounded-lg flex items-center justify-center text-laranja">
                    {s.icon}
                  </div>
                  <h3 className="font-condensed font-extrabold text-lg tracking-wide mb-2.5 uppercase">{s.title}</h3>
                  <p className="text-[0.9rem] text-cinza leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PÚBLICO-ALVO */}
      <section id="publico" className="bg-azul2 border-t border-laranja/12">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <Reveal>
            <div className="text-center max-w-[600px] mx-auto">
              <div className="font-condensed font-bold text-[0.75rem] tracking-[0.22em] uppercase text-laranja mb-2.5 flex justify-center">Quem atendemos</div>
              <h2 className="font-condensed font-black text-4xl md:text-5xl leading-[1.05] text-center mb-4">Empresas que não podem<br /><span className="text-laranja">depender da sorte</span></h2>
              <div className="w-15 h-[3px] bg-laranja rounded-sm mx-auto mb-7" />
              <p className="text-cinza text-lg leading-relaxed text-center">Especializados em atender pequenas e médias empresas industriais que precisam de suporte elétrico profissional sem manter um setor interno.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: "🏗️", name: "Metalúrgicas", desc: "Prensas, tornos, solda — elétrica crítica" },
              { icon: "🍫", name: "Alimentos e Bebidas", desc: "Linhas de produção contínuas" },
              { icon: "📦", name: "Logística e Armazéns", desc: "Esteiras, elevadores, automação" },
              { icon: "🔩", name: "Indústria em Geral", desc: "Qualquer processo que dependa de elétrica" }
            ].map((p, idx) => (
              <Reveal key={idx} delay={0.1}>
                <div className="border border-cinza/12 rounded-lg p-6 text-center bg-azul3/40 hover:border-laranja/35 hover:bg-laranja/5 transition-all">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-condensed font-bold text-base tracking-wider uppercase text-white">{p.name}</h4>
                  <p className="text-[0.82rem] text-cinza mt-1.5">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-[linear-gradient(135deg,var(--color-azul)_0%,#0f3060_100%)] border-t border-laranja/12">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <Reveal className="hidden md:block">
              <div className="relative">
                <div className="w-full aspect-[4/5] bg-[linear-gradient(135deg,var(--color-azul3)_0%,var(--color-azul2)_100%)] rounded-xl border border-laranja/20 flex flex-col items-center justify-center gap-3 text-cinza text-center p-8">
                  <div className="text-6xl mb-2">👷</div>
                  <strong className="font-condensed text-lg tracking-wider">Foto do Dario</strong>
                  <span className="text-[0.8rem] opacity-70">(Adicione uma foto profissional aqui)</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-[120px] h-[120px] bg-laranja rounded-lg -z-10 opacity-30" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="font-condensed font-bold text-[0.75rem] tracking-[0.22em] uppercase text-laranja mb-2.5">Quem somos</div>
              <h2 className="font-condensed font-black text-4xl md:text-5xl leading-[1.05] mb-4">Técnica, <span className="text-laranja">experiência</span><br />e comprometimento</h2>
              <div className="w-15 h-[3px] bg-laranja rounded-sm mb-7" />
              <p className="text-cinza text-base leading-relaxed mb-4">
                Dario Gomes é eletricista industrial com mais de 15 anos de experiência em empresas de médio e grande porte. Depois de anos liderando equipes de manutenção, decidiu levar esse nível de qualidade e comprometimento às pequenas e médias empresas que não têm um setor elétrico interno.
              </p>
              <p className="text-cinza text-base leading-relaxed">
                Atendemos empresas na região de Indaiatuba, Campinas e entorno, sempre com foco em solucionar o problema com agilidade, segurança e transparência — sem "gambiarra".
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "NR10 e NR12 — trabalho seguro e dentro da norma",
                  "Laudo técnico após cada serviço executado",
                  "Atendimento emergencial para paradas não planejadas",
                  "Contrato de manutenção mensal disponível"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 py-3 border-b border-cinza/10 text-[0.95rem] text-texto leading-snug last:border-none">
                    <Check className="text-laranja shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/5519997869520" target="_blank" className="inline-flex items-center gap-2.5 bg-laranja text-azul2 font-condensed font-extrabold text-base tracking-wider uppercase px-8 py-3.5 rounded hover:bg-laranja2 transition-all hover:-translate-y-0.5 mt-8">
                <MessageCircle size={20} />
                Falar com Dario
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-[linear-gradient(135deg,#071520_0%,#0B2545_100%)] border-t border-laranja/15">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <Reveal>
              <div className="font-condensed font-bold text-[0.75rem] tracking-[0.22em] uppercase text-laranja mb-2.5">Contato</div>
              <h2 className="font-condensed font-black text-4xl md:text-5xl leading-[1.05] mb-4">Solicite um<br /><span className="text-laranja">orçamento gratuito</span></h2>
              <div className="w-15 h-[3px] bg-laranja rounded-sm mb-7" />
              <p className="text-cinza text-lg leading-relaxed">Preencha o formulário ou entre em contato diretamente pelo WhatsApp. Retornamos no mesmo dia.</p>

              <div className="mt-8 space-y-5">
                {[
                  { icon: <Phone size={18} />, label: "WhatsApp / Telefone", val: "(19) 9.9786-9520", link: "https://wa.me/5519997869520" },
                  { icon: <MapPin size={18} />, label: "Área de atendimento", val: "Indaiatuba, Campinas e região" },
                  { icon: <Clock size={18} />, label: "Horário", val: "Seg–Sex 7h–18h · Urgências 24h" }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-5 border-b border-cinza/10 last:border-none text-[0.95rem] text-texto">
                    <div className="w-10 h-10 bg-laranja/12 rounded-lg flex items-center justify-center text-laranja shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block font-condensed text-[0.72rem] font-bold tracking-widest uppercase text-cinza mb-0.5">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} target="_blank" className="font-medium text-texto hover:text-laranja transition-colors">{info.val}</a>
                      ) : (
                        <span className="font-medium">{info.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form className="flex flex-col gap-4 mt-8" onSubmit={enviarWA}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-condensed font-bold text-[0.75rem] tracking-widest uppercase text-cinza">Seu nome</label>
                    <input name="nome" type="text" placeholder="João Silva" required className="bg-white/5 border border-cinza/20 rounded-md px-4 py-3 text-white font-sans text-[0.95rem] outline-none focus:border-laranja focus:bg-laranja/5 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-condensed font-bold text-[0.75rem] tracking-widest uppercase text-cinza">Empresa</label>
                    <input name="empresa" type="text" placeholder="Metalúrgica ABC" className="bg-white/5 border border-cinza/20 rounded-md px-4 py-3 text-white font-sans text-[0.95rem] outline-none focus:border-laranja focus:bg-laranja/5 transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed font-bold text-[0.75rem] tracking-widest uppercase text-cinza">WhatsApp / Telefone</label>
                  <input name="telefone" type="tel" placeholder="(19) 9 9999-0000" required className="bg-white/5 border border-cinza/20 rounded-md px-4 py-3 text-white font-sans text-[0.95rem] outline-none focus:border-laranja focus:bg-laranja/5 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed font-bold text-[0.75rem] tracking-widest uppercase text-cinza">Serviço de interesse</label>
                  <select name="servico" className="bg-white/5 border border-cinza/20 rounded-md px-4 py-3 text-white font-sans text-[0.95rem] outline-none focus:border-laranja focus:bg-laranja/5 transition-all appearance-none">
                    <option value="" className="bg-azul">Selecione...</option>
                    <option className="bg-azul">Manutenção Preventiva / Preditiva</option>
                    <option className="bg-azul">Comandos Elétricos</option>
                    <option className="bg-azul">Instalação Elétrica</option>
                    <option className="bg-azul">Automação</option>
                    <option className="bg-azul">Montagem de Painel Elétrico</option>
                    <option className="bg-azul">Diagnóstico / Reparo de Máquina</option>
                    <option className="bg-azul">Outro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed font-bold text-[0.75rem] tracking-widest uppercase text-cinza">Descreva brevemente o que precisa</label>
                  <textarea name="msg" placeholder="Ex: motor de prensa parado, precisamos de diagnóstico urgente…" className="bg-white/5 border border-cinza/20 rounded-md px-4 py-3 text-white font-sans text-[0.95rem] outline-none focus:border-laranja focus:bg-laranja/5 transition-all min-h-[120px] resize-y" />
                </div>
                <button type="submit" className="bg-laranja text-azul2 font-condensed font-extrabold text-base tracking-widest uppercase border-none rounded px-8 py-4 cursor-pointer w-full hover:bg-laranja2 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,166,35,0.35)] mt-2">
                  Enviar pelo WhatsApp ⚡
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050f1a] border-t border-laranja/10 px-8 py-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="font-condensed font-black text-xl tracking-widest text-white">DARIO<span className="text-laranja">.</span></div>
          <div className="text-[0.82rem] text-cinza mt-1">Eletricidade Industrial — CNPJ [a definir]</div>
        </div>
        <div className="text-[0.82rem] text-cinza">© 2025 Dario Gomes. Todos os direitos reservados.</div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a href="https://wa.me/5519997869520" target="_blank" className="fixed bottom-8 right-8 z-[999] w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center no-underline text-3xl shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-all hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] animate-[pulse-wa_3s_ease-in-out_infinite]" title="Falar pelo WhatsApp" aria-label="WhatsApp">
        <MessageCircle size={28} />
      </a>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 8px 32px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 8px 48px rgba(37,211,102,0.75), 0 0 0 10px rgba(37,211,102,0.12); }
        }
      `}</style>
    </div>
  );
}
