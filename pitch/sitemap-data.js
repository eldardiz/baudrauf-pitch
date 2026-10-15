// One source for the sitemap: read by pitch/sitemap-comparison.html AND the pitch hub (pitch/index.html).
// row: [label, type?, chip?, questions?]  type: '' | 'new' | 'moved' | 'bad' | 'soft'
// questions = buyer question IDs (P01 to P21) this page or section is built to answer. Same IDs as the
// AEO guide and aeo-kit/clients/direct/baudrauf/prompts.json (frozen 2026-10-15).
// The Home card mirrors mockup/index.html section by section (keep them in step).

window.BD_QUESTIONS = {
  P01: 'Generalunternehmer Wien Empfehlung',
  P02: 'Generalunternehmer Wien',
  P03: 'Wer macht Komplettsanierung Altbauwohnung Wien?',
  P04: 'Altbausanierung Wien Firma',
  P05: 'Wohnungssanierung Wien Komplettsanierung Fixpreis Firma',
  P06: 'Badsanierung Wien',
  P07: 'Badsanierung Wien Komplettanbieter',
  P08: 'Badsanierung Wien Kosten Komplettumbau',
  P09: 'Dachgeschossausbau Wien Firma',
  P10: 'Dachgeschossausbau Wien Generalunternehmer schlüsselfertig',
  P11: 'Was kostet eine Altbausanierung pro m2 in Wien?',
  P12: 'Wohnung renovieren Wien Kosten pro m2 2026',
  P13: 'Wärmepumpe Installateur Wien Förderung',
  P14: 'Wärmepumpe Wien',
  P15: 'Wärmepumpe Altbau Wien Firma Komplettumstieg Gasheizung',
  P16: 'beste Baufirma Wien',
  P17: 'Baufirma Wien Erfahrungen Bewertungen Sanierung',
  P18: 'Generalunternehmer Wien Geschäftslokal Umbau Gewerbe',
  P19: 'Ich will meine Altbauwohnung in Wien komplett sanieren und gleichzeitig von Gas auf Wärmepumpe umsteigen. Welche Firma macht beides?',
  P20: 'Welche Generalunternehmer in Wien sind seriös und haben gute Bewertungen?',
  P21: 'Kennst du die Firma Baudrauf in Wien? Ist sie empfehlenswert?'
};

window.BD_NEW = {
  title: 'Home', home: true,
  rows: [
    ['Navigation · Telefon im Banner + "Projekt anfragen"', 'new', 'neu'],
    ['Hero · "Bau und Haustechnik. Aus einer Hand."', 'new', 'neu', ['P02']],
    ['Über BAUDRAUF · 22 Kundenlogos', 'moved', 'nach oben', ['P01']],
    ['Projekte · Ort, m², Dauer je Referenz', 'new', 'neu', ['P17']],
    ['Leistungen · 6 Türen mit eigenem Foto', 'new', 'neu', ['P04', 'P09', 'P14', 'P18']],
    ['Ablauf · 5 Schritte'],
    ['Über uns · seit 2015, Geschäftsführer, 2 Gewerbe', 'new', 'neu', ['P21']],
    ['Kundenstimmen · 3 Videos'],
    ['Kontakt · 1 Formular + Google 4,9 (47)', 'new', 'ersetzt 8', ['P20']],
    ['Abschluss · Anfrage + Telefon'],
    ['Footer · FN, UID, alle Leistungen', 'soft'],
  ],
  kids: [
    { title: 'Bau & Sanierung', rows: [
      ['Übersicht'], ['Neubau'], ['Altbausanierung', '', '', ['P03', 'P04']], ['Wohnungsrenovierung', '', '', ['P05']],
      ['Dachgeschossausbau', '', '', ['P09', 'P10']], ['Badsanierung', 'moved', 'verschoben', ['P06', 'P07', 'P08']],
      ['Fassade & Wärmedämmung', 'moved', '2 → 1'], ['Schadensanierung'], ['Garten & Terrasse'], ['Küche', 'moved', 'verschoben'] ] },
    { title: 'Gewerke', chip: ['g', 'Hub neu'], rows: [
      ['Übersicht aller Gewerke', 'new', 'neu'], ['Rohbau & Maurerarbeiten', 'moved', 'umbenannt'], ['Installateur'], ['Elektriker'], ['Maler'],
      ['Bodenleger'], ['Fliesenleger'], ['Trockenbau'], ['Kellerabdichtung & Trockenlegung', 'moved', '2 → 1'],
      ['Bagger & Abbruch'], ['Spengler & Dachdecker'], ['Pflasterarbeiten'] ] },
    { title: 'Gebäudetechnik', rows: [
      ['Übersicht'], ['Wärmepumpe', 'moved', 'in Hub', ['P13', 'P14']], ['Photovoltaik', 'moved', 'in Hub'],
      ['Heizung & Gastherme', 'moved', '2 → 1'], ['Sanitär'], ['Klimaanlage'], ['Solarthermie'], ['Energieberatung', 'new', 'ausgebaut'] ] },
    { title: 'Sanierung + Heizung', chip: ['g', 'neu'], rows: [
      ['Ein Projekt, ein Vertrag', 'new', '', ['P15', 'P19']], ['Ablauf · Bau und Technik abgestimmt', 'new'],
      ['Gesamtkosten nach Förderung · Richtwerte', 'new', '', ['P13']], ['Referenzen · Umstieg im Altbau', 'new', '', ['P15']], ['FAQ', 'new'] ] },
    { title: 'Für Unternehmen', chip: ['g', 'neu'], rows: [
      ['Hausverwaltungen', 'new', 'neu'], ['Versicherungsschäden · Wasser & Brand', 'new', 'neu'],
      ['Gewerbe & Gastro', 'moved', '2 → 1', ['P18']], ['Referenzkunden · Logos', 'moved'] ] },
    { title: 'Projekte', rows: [
      ['Filter · Neubau / Sanierung / Technik / Gewerbe', 'new', 'neu'], ['Karte · Wien & Niederösterreich', 'new', 'neu', ['P01']],
      ['Projekt-Detail (37) · Bezirk, Umfang, Gewerke', '', '', ['P17']], ['Verlinkt zur Leistung', 'new', 'neu'] ] },
    { title: 'Kosten & Förderung', rows: [
      ['Kosten pro m²', 'moved', '1 URL', ['P11', 'P12']], ['Förderungen 2026 · eine Quelle, datiert', 'new', 'neu', ['P13']],
      ['Richtwerte je Leistung', 'new', 'neu', ['P08']] ] },
    { title: 'Ratgeber', rows: [
      ['Themen · Wärmepumpe, Sanierung, Bad, Dachgeschoss, Förderung', 'new', 'Cluster', ['P03', 'P08', 'P11']],
      ['Autor mit Namen', 'new', 'neu'], ['FAQ', 'moved', 'verschoben'] ] },
    { title: 'Über uns', rows: [
      ['Team & Geschäftsführung', 'new', 'neu', ['P01', 'P20']], ['Fakten auf einen Blick', 'new', 'AEO', ['P02', 'P21']],
      ['Partner & Marken', 'new', 'neu'], ['Karriere'], ['Downloads', 'soft'] ] },
    { title: 'Kontakt', rows: [
      ['Projekt anfragen · 1 Formular', 'new', 'ersetzt 8'], ['Kontakt & Anfahrt · eine Nummer'], ['WhatsApp', 'soft'] ] },
    { title: 'Außerhalb der Website', offsite: true, rows: [
      ['Google Bewertungen · aktiv anfragen', 'new', '', ['P16', 'P17', 'P20']],
      ['daibau · my-hammer · energiesparhaus · Houzz', 'new', 'fehlt heute', ['P01', 'P16', 'P17']],
      ['Bosch Partnerseite · WKO · Herold · firmenabc', '', 'gleiche Fakten', ['P21']],
      ['YouTube · Kundenvideos mit Transkript', 'new', '', ['P19', 'P21']] ] },
  ]
};

window.BD_OLD = {
  title: 'Home', home: true,
  rows: [
    ['Header · kein Telefon', 'bad'],
    ['Hero-Slider · 3 Slides, H1 versteckt', 'bad'],
    ['Logos · "1000+ vertrauen"', 'bad', 'Zahl?'],
    ['"Herausforderungen am Bau" · 5 Negativpunkte', 'bad'],
    ['"Unsere Lösung: Alles aus einer Hand"'],
    ['Formular · 8 Schritte + Ladebalken', 'bad'],
    ['Fachpartner · Bosch, Viessmann'],
    ['"Andere Unternehmen" · 5 weitere Negativpunkte', 'bad'],
    ['Gefragteste Leistungen · 4 Karten'],
    ['Arbeitsprozess · 4 Schritte'],
    ['Förderungen · 3 Kacheln'],
    ['Erfolgreiche Projekte · 4'],
    ['Kundenvideos · 3'],
    ['SEO-Textblock', 'soft'],
    ['FAQ · 9 Fragen'],
    ['CTA · wiederholt den Hero', 'bad'],
    ['Footer', 'soft'],
  ],
  kids: [
    { title: 'Bau', rows: [
      ['Übersicht'], ['Neubau'], ['Garten- und Terrassenbau'], ['Dachgeschossausbau', 'bad', 'Preise widersprüchlich'],
      ['Wohnungsrenovierung'], ['Altbausanierung'], ['Fassadensanierung'], ['Schadensanierung'], ['Gewerbekunden'],
      ['Badsanierung', 'soft', 'URL außerhalb /bau'], ['Wärmedämmung', 'soft', 'URL außerhalb /bau'], ['Kosten pro m²', 'bad', '2 URLs'] ] },
    { title: 'Gewerke', chip: ['r', 'H1 = 1 Wort'], rows: [
      ['Baumeister', 'bad', 'Konzession eingeschränkt'], ['Installateur'], ['Elektriker'], ['Maler'], ['Bodenleger', 'bad', 'Tippfehler Titel'],
      ['Fliesenleger'], ['Trockenbau', 'bad', 'Tippfehler Titel'], ['Kellerabdichtung'], ['Trockenlegung'],
      ['Bagger- und Abbrucharbeiten'], ['Spengler und Dachdecker'], ['Küche'], ['Pflasterarbeiten'] ] },
    { title: 'Gebäudetechnik', rows: [
      ['Übersicht'], ['Gastherme'], ['Sanitär'], ['Heizung'], ['Klimaanlage'], ['Solar'], ['Gastro'],
      ['Energieberatung', 'bad', '~180 Wörter'], ['Wärmepumpe', 'bad', '65 % Förderung veraltet'], ['Photovoltaik', 'soft', 'URL außerhalb Hub'] ] },
    { title: 'Allgemein', rows: [
      ['Förderungen', 'bad', 'widerspricht FAQ'], ['Referenzen (37)', 'bad', 'nicht verlinkt'],
      ['Über uns', 'bad', 'kein Team, Stockfotos'], ['Blog (42)', 'bad', 'kein Autor'],
      ['Karriere'], ['FAQ', 'soft', 'kein Schema'], ['Downloads'], ['Projektanfrage', 'bad', '8 Schritte'], ['Kontaktwege', 'bad', '3 Nummern'] ] },
    { title: 'Fehlt heute', ghost: true, rows: [
      ['Team mit Namen', 'bad'], ['Seite für Hausverwaltungen', 'bad'], ['Versicherungsschäden (B2B)', 'bad'],
      ['Sanierung + Heizung als ein Projekt', 'bad'], ['Fakten auf einen Blick', 'bad'], ['Bewertungen mit Anzahl', 'bad'] ] },
  ]
};

// Shared renderer (used by both pages)
window.BD_renderSitemap = function (id, data, opts = {}) {
  const icoHome = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 6.5 7 2l5 4.5V12H8.5V9h-3v3H2z" stroke="#000" stroke-width="1.3" stroke-linejoin="round"/></svg>';
  const icoPage = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="2" stroke="#000" stroke-width="1.3"/></svg>';
  const icoOff = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#000" stroke-width="1.3"/><path d="M1 6h10M6 1c1.6 1.4 2.4 3 2.4 5S7.6 9.6 6 11C4.4 9.6 3.6 8 3.6 6S4.4 2.4 6 1z" stroke="#000" stroke-width="1"/></svg>';
  const chipCls = { new: 'g', moved: 'v', bad: 'r', soft: 'r' };
  const qlink = q => `<a class="q" href="${opts.qHref ? opts.qHref(q) : '#' + q}" title="${(window.BD_QUESTIONS[q] || '').replace(/"/g, '&quot;')}">${q}</a>`;
  const card = n => {
    const ico = n.home ? icoHome : n.offsite ? icoOff : icoPage;
    const head = `<div class="ptitle">${ico}${n.title}${n.chip ? `<span class="spacer"></span><span class="chip ${n.chip[0]}">${n.chip[1]}</span>` : ''}</div>`;
    const rows = n.rows.map(([l, t = '', c, qs]) => {
      const chip = c ? `<span class="chip ${t === 'soft' ? 'v' : chipCls[t] || 'g'}">${c}</span>` : '';
      const q = !opts.noQ && qs && qs.length ? `<span class="qs">${qs.map(qlink).join('')}</span>` : '';
      return `<div class="row ${t}">${l}${chip}${q}</div>`;
    }).join('');
    const style = n.ghost ? ' style="background:transparent;outline:2px dotted #F04438"' : n.offsite ? ' style="background:transparent;outline:2px dashed #7CA3FF"' : '';
    return `<div class="pcard${n.home ? ' home' : ''}">${head}<div class="pbody"${style}>${rows}</div></div>`;
  };
  document.getElementById(id).innerHTML = card(data) + '<div class="drop"></div><ul class="kids">' + data.kids.map(k => `<li>${card(k)}</li>`).join('') + '</ul>';
};
