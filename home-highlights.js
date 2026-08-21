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
        <span class="eyebrow">What we do</span>
        <h2>Technical support built around the equipment you depend on</h2>
        <p>From routine maintenance to complex electronic faults, Orygend Healthcare focuses on dependable service, practical diagnosis and extending the useful life of medical equipment wherever technically possible.</p>
      </div>

      <div class="row g-5 mb-5">
        <div class="col-lg-6">
          <div class="svc-card h-100">
            <span class="svc-tag">Services</span>
            <h3>Keep critical equipment dependable</h3>
            <p>Our service support covers preventive maintenance, corrective maintenance, AMC/CMC, breakdown assistance and equipment restoration. We work to identify the actual cause of a problem, communicate the repair path clearly and help reduce avoidable downtime.</p>
            <p>Whether the requirement is scheduled maintenance or urgent technical support, our aim is reliable equipment performance and responsible servicing rather than simply replacing parts.</p>
            <a class="btn btn-outline-navy mt-2" href="services.html">Explore Our Services →</a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="svc-card h-100">
            <span class="svc-tag">Equipment</span>
            <h3>Support for the equipment your patients depend on</h3>
            <p>We support a broad range of medical equipment used in hospitals, clinics and healthcare facilities. Our approach combines preventive care, fault diagnosis and practical repair solutions with a focus on dependable operation.</p>
            <p>We work across brands and models, subject to diagnosis, technical feasibility and availability of the required parts or components.</p>
            <a class="btn btn-outline-navy mt-2" href="equipment.html">Explore Equipment →</a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="svc-card h-100 featured">
            <span class="svc-tag">Board Repair</span>
            <h3>Repair the fault. Preserve the equipment.</h3>
            <p>When an electronic fault appears, replacing an entire assembly or equipment is not always the only answer. We work at board and component level to identify the actual failure point and restore the affected board where technically feasible.</p>
            <p>We service medical equipment boards across brands and models, subject to diagnosis and parts availability. Where required, we source imported ICs and specialized electronic components to help preserve repair quality and longevity.</p>
            <p><strong>We restore the state of your equipment, so you can focus on the state of your patients.</strong></p>
            <a class="btn btn-amber mt-2" href="board-repair.html">Explore Board Repair →</a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="svc-card h-100">
            <span class="svc-tag">Coverage</span>
            <h3>Professional support where your equipment needs us</h3>
            <p>Our service network is designed to support hospitals, clinics and healthcare facilities across India. From our main service unit in Bangalore, we support field service requirements and pan-India courier logistics for equipment and board-level repair where appropriate.</p>
            <p>Tell us your location, equipment and service requirement and we can guide you on the most practical service route.</p>
            <a class="btn btn-outline-navy mt-2" href="coverage.html">View Service Coverage →</a>
          </div>
        </div>
      </div>

      <div class="section-head mb-4">
        <span class="eyebrow">Questions we hear most</span>
        <h2>What engineers, doctors and hospital teams ask us</h2>
        <p>Some of the practical questions we regularly receive before a service, repair or equipment decision.</p>
      </div>
      <div class="row g-3">
        <div class="col-lg-6"><div class="svc-card"><h3>Can you repair equipment from any brand?</h3><p>We support medical equipment across different brands and models, subject to diagnosis, technical feasibility and availability of required parts.</p></div></div>
        <div class="col-lg-6"><div class="svc-card"><h3>Do you repair circuit boards or only replace them?</h3><p>We provide board-level diagnosis and repair where technically feasible, identifying the actual fault before recommending replacement.</p></div></div>
        <div class="col-lg-6"><div class="svc-card"><h3>Can a board be repaired without replacing the whole equipment?</h3><p>Where the fault is repairable at board or component level, our aim is to restore the equipment rather than unnecessarily replace a functioning system.</p></div></div>
        <div class="col-lg-6"><div class="svc-card"><h3>Do you use imported ICs and electronic components?</h3><p>Where required, we source imported ICs and specialized electronic components to support the quality and longevity of the repair.</p></div></div>
        <div class="col-lg-6"><div class="svc-card"><h3>Do you provide preventive maintenance as well as breakdown support?</h3><p>Yes. Our service scope includes preventive maintenance, corrective maintenance, AMC/CMC and breakdown-related technical support.</p></div></div>
        <div class="col-lg-6"><div class="svc-card"><h3>How do we know whether to repair or replace equipment?</h3><p>We first assess the actual fault and equipment condition, then explain the technically practical repair or restoration options before recommending replacement where necessary.</p></div></div>
      </div>
      <div class="text-center mt-4">
        <a class="btn btn-outline-navy" href="faq.html">View More FAQs →</a>
        <a class="btn btn-amber ms-2" href="contact.html">Talk to Our Team →</a>
      </div>
    </div>`;

  var footer = document.querySelector('footer');
  if (footer) footer.parentNode.insertBefore(section, footer);
  else document.body.appendChild(section);
})();
