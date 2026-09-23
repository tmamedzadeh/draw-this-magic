import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, Award, BadgeCheck, Check, ChevronRight, Dumbbell, Footprints,
  HeartPulse, Instagram, Languages, MapPin, Menu, MessageCircle, Monitor,
  Phone, Send, Sparkles, UsersRound,
} from "lucide-react";
import heroImage from "@/assets/hero-practitioner.jpg";
import aboutImage from "@/assets/about-practitioner.jpg";
import galleryImage from "@/assets/movement-gallery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nəzrin Kərimova — Müalicəvi gimnastika və fiziki reabilitasiya" },
      { name: "description", content: "Bakıda fərdi müalicəvi gimnastika, düzgün duruş və fiziki reabilitasiya məşqləri." },
      { property: "og:title", content: "Nəzrin Kərimova — Sağlam hərəkət" },
      { property: "og:description", content: "Daha sağlam hərəkət və daha düzgün duruş üçün fərdi yanaşma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsapp = "https://wa.me/994505595598";
const telegram = "https://t.me/neztimez8";

const services = [
  { icon: Activity, title: "Skolioz", text: "Onurğanın düzgün vəziyyətinin və hərəkət keyfiyyətinin dəstəklənməsi." },
  { icon: HeartPulse, title: "Kifoz", text: "Duruş və bədən mexanikasının qiymətləndirilməsi." },
  { icon: Sparkles, title: "Lordoz", text: "Onurğa sağlamlığı və balansın bərpası." },
  { icon: Footprints, title: "Valqus", text: "Düzgün ayaq vəziyyəti və hərəkət nəzarəti." },
  { icon: Footprints, title: "Yastıpəncəlik", text: "Ayaq sağlamlığı və düzgün dayağın qurulması." },
  { icon: Activity, title: "Duruş problemləri", text: "Sağlam və estetik duruş üçün fərdi yanaşma." },
];

const credentials = [
  { icon: Award, title: "Qırmızı diplom", text: "Gimnastika üzrə məşqçi" },
  { icon: BadgeCheck, title: "AGF", text: "Lisenziya" },
  { icon: Dumbbell, title: "Personal Trainer", text: "Advanced Instructor" },
  { icon: UsersRound, title: "Functional Corrective", text: "Exercise Specialist" },
  { icon: Sparkles, title: "Personal Coach", text: "Fərdi yanaşma" },
  { icon: HeartPulse, title: "Klinik biomexanika", text: "Dayaq-hərəkət aparatı" },
  { icon: UsersRound, title: "Rapid Personal Transformation", text: "1st level / 2nd level" },
  { icon: Award, title: "Rusiya reyestri", text: "Fiziki reabilitasiya mütəxəssisi" },
];

function Brand() {
  return <a href="#top" className="brand" aria-label="Ana səhifə"><strong>NƏZRİN KƏRİMOVA</strong><span>MÜALİCƏVİ GİMNASTİKA · FİZİKİ REABİLİTASİYA</span></a>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="section-title"><h2>{children}</h2><span /></div>;
}

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Əsas naviqasiya">
            <a href="#top">Ana səhifə</a><a href="#haqqimda">Haqqımda</a><a href="#xidmetler">Xidmətlər</a><a href="#neticeler">Nəticələr</a><a href="#elaqe">Əlaqə</a>
          </nav>
          <div className="header-actions">
            <a href="https://instagram.com" aria-label="Instagram"><Instagram size={19} /></a>
            <a href={telegram} aria-label="Telegram"><Send size={18} /></a>
            <a className="button button-primary header-cta" href={whatsapp}><MessageCircle size={17} /> WhatsApp ilə əlaqə</a>
            <button className="mobile-menu" aria-label="Menyunu aç"><Menu /></button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">SAĞLAM BƏDƏN <i /> DÜZGÜN DURUŞ <i /> GÜVƏNLİ GƏLƏCƏK</p>
            <h1>Daha sağlam hərəkət.<br/><em>Daha düzgün duruş.</em></h1>
            <p className="hero-lead">Bakıda müalicəvi gimnastika və fiziki reabilitasiya üzrə fərdi yanaşma ilə məşqlər.</p>
            <div className="hero-buttons">
              <a className="button button-primary" href={whatsapp}><MessageCircle size={19}/> WhatsApp ilə əlaqə <ChevronRight size={18}/></a>
              <a className="button button-outline" href="tel:+994505595598"><Phone size={18}/> Zəng edin</a>
            </div>
            <div className="hero-details"><span><MapPin /> Bakı</span><span><Monitor /> Online & Offline</span><span><Languages /> AZ · RU · EN</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-halo" />
            <img src={heroImage} alt="Nəzrin Kərimova, müalicəvi gimnastika mütəxəssisi" width={1280} height={1024} />
            <div className="signature">Nəzrin<br/>Kərimova <small>♡</small></div>
            <div className="floating-note">Hərəkət<br/>həyatdır.</div>
          </div>
        </div>
      </section>

      <div className="container stats-wrap">
        <section className="stats" aria-label="Təcrübə göstəriciləri">
          <div><HeartPulse/><b>2017</b><span>Bədii gimnastika üzrə<br/>məşqçilik fəaliyyəti</span></div>
          <div><Dumbbell/><b>2024</b><span>Fiziki reabilitasiya üzrə<br/>mütəxəssis fəaliyyəti</span></div>
          <div><UsersRound/><b>100+</b><span>Uşaqlara kömək etmişəm</span></div>
        </section>
      </div>

      <section id="xidmetler" className="container section-pad">
        <SectionTitle>İxtisaslaşma</SectionTitle>
        <div className="service-grid">
          {services.map(({icon: Icon, title, text}) => <article className="service-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="haqqimda" className="container about-grid section-pad">
        <div className="about-copy">
          <SectionTitle>Haqqımda</SectionTitle>
          <h3>Təcrübə yalnız illərlə ölçülmür.</h3>
          <p>Mən Nəzrin Kərimova, Bakıda müalicəvi gimnastika üzrə məşqçiyəm. 2017-ci ildən bədii gimnastika, 2024-cü ildən isə fiziki reabilitasiya istiqamətində fəaliyyət göstərirəm.</p>
          <ul>{["Fərdi yanaşma", "Elmi əsaslı metodlar", "Uşaqlarla təcrübə", "Online və offline məşqlər"].map(x=><li key={x}><Check/>{x}</li>)}</ul>
          <a className="button button-outline" href="#elaqe">Daha çox məlumat</a>
        </div>
        <div className="about-photo"><img src={aboutImage} alt="Nəzrin Kərimova" width={896} height={1280} loading="lazy"/><span>Səbir<br/>Duruş<br/>Güvən<br/>Hərəkət<br/>İnkişaf ♡</span></div>
        <div className="credentials">
          <SectionTitle>Sertifikatlar və ixtisaslar</SectionTitle>
          <div className="credential-grid">{credentials.map(({ icon: Icon, title, text }) => <article key={title}><Icon/><div><b>{title}</b><span>{text}</span></div></article>)}</div>
        </div>
      </section>

      <section id="neticeler" className="container movement section-pad">
        <div className="movement-heading"><div><SectionTitle>Hərəkət danışır</SectionTitle><p><b>Real nəticələr.</b> Həqiqi məşqlər.<br/>Həqiqi həyat.</p></div><span>Kiçik addımlar,<br/>böyük dəyişikliklər yaradır.</span></div>
        <div className="gallery-strip"><img src={galleryImage} alt="Müalicəvi hərəkət və məşq nümunələri" width={1920} height={768} loading="lazy"/></div>
      </section>

      <section className="container process section-pad">
        <SectionTitle>Necə işləyirik?</SectionTitle>
        <div className="steps">{[
          ["1","Qiymətləndirmə","Bədən duruşunun və hərəkət vərdişlərinin analizi."],
          ["2","Fərdi yanaşma","Sizə uyğun proqramın tərtib edilməsi."],
          ["3","Məşqlər","Peşəkar nəzarətlə icra."],
          ["4","Dinamikanın izlənməsi","Müntəzəm nəticə və dəstək."],
        ].map(([n,t,d])=><article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
      </section>

      <section id="elaqe" className="container contact-band">
        <div className="contact-main"><h2>Sizin üçün buradayam</h2><p>Suallarınız var? Əlaqə saxlayın.</p><div><a className="button button-primary" href={whatsapp}>WhatsApp ilə əlaqə <ChevronRight/></a><a className="button button-outline" href="tel:+994505595598"><Phone/> Zəng edin</a></div></div>
        <address><span><Phone/> +994 50 559 55 98</span><span><MapPin/> Bakı, Azərbaycan</span><span><Instagram/> @nezkarimova</span><span><Send/> @neztimez8</span></address>
        <div className="telegram-card"><Send/><div><h3>Telegram kanalına qoşulun</h3><p>Evdə düzgün hərəkət etməyi öyrənin.</p><a href={telegram}>Telegram kanalına keçin <ChevronRight/></a></div></div>
      </section>

      <footer><div className="container footer-inner"><Brand/><nav><a href="#top">Ana səhifə</a><a href="#haqqimda">Haqqımda</a><a href="#xidmetler">Xidmətlər</a><a href="#neticeler">Nəticələr</a><a href="#elaqe">Əlaqə</a></nav><div><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href={telegram} aria-label="Telegram"><Send/></a></div></div><div className="container copyright">© 2026 Nəzrin Kərimova. Bütün hüquqlar qorunur.<span>Sağlam bədən. Güvənli gələcək. ♡</span></div></footer>
    </main>
  );
}
