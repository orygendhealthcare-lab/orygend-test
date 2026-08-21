(function(){
  if (document.getElementById('home-page-highlights')) return;
  var path = (window.location.pathname || '').toLowerCase();
  if (!(path.endsWith('/') || path.endsWith('/index.html') || path === '')) return;

  var section = document.createElement('section');
  section.id = 'home-page-highlights';
  section.className = 'section';
  section.innerHTML = `
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">What we support</span>
        <h2>Explore our services, equipment &amp; support</h2>
        <p>A quick look at the areas we support. Explore each section for the full details, capabilities and coverage.</p>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-xl-3"><div class="svc-card h-100"><span class="svc-tag">Services</span><h3>Medical Equipment Services</h3><p>Preventive maintenance, corrective service, AMC/CMC and breakdown support designed to keep critical equipment dependable.</p><a class="btn btn-outline-navy btn-sm mt-3" href="services.html">More about Services</a></div></div>
        <div class="col-md-6 col-xl-3"><div class="svc-card h-100"><span class="svc-tag">Equipment</span><h3>Equipment We Support</h3><p>Support across a broad range of medical equipment, with practical servicing focused on reliability and useful service life.</p><a class="btn btn-outline-navy btn-sm mt-3" href="equipment.html">View Equipment</a></div></div>
        <div class="col-md-6 col-xl-3"><div class="svc-card h-100"><span class="svc-tag">Board Repair</span><h3>Board-Level Repair</h3><p>Component-level diagnosis and repair for medical equipment boards, helping restore equipment instead of replacing good equipment unnecessarily.</p><a class="btn btn-outline-navy btn-sm mt-3" href="board-repair.html">More about Board Repair</a></div></div>
        <div class="col-md-6 col-xl-3"><div class="svc-card h-100"><span class="svc-tag">Coverage</span><h3>Service Coverage</h3><p>Service support for hospitals, clinics and healthcare facilities across India, subject to equipment and service requirements.</p><a class="btn btn-outline-navy btn-sm mt-3" href="coverage.html">View Coverage</a></div></div>
      </div>
    </div>`;

  var footer = document.querySelector('footer');
  if (footer) footer.parentNode.insertBefore(section, footer);
  else document.body.appendChild(section);
})();
