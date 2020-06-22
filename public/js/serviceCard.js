const template = document.createElement('template');
template.innerHTML = `
<style>
  
h3 {
  margin-bottom: 0;

}

  .service-card {
    font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
  }

  .service-card img {
    width: 100%;    
  }

  .service-card button {
		cursor: pointer;
		background: darkorchid;
		color: #fff;
		border: 0;
		border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 5px;
  }

  .info {
    display: none;
  }
  
  .info p {
    
    
  }

</style>

<div class="service-card">
<img />
   <div>
      <h3></h3>
      <div class="info">
        <p><slot name="description"</p>
      </div>
      <button id="toggle-info">Show Info</button>
   </div>
</div>



`;

class ServiceCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = false;
    
    this.attachShadow({
      mode: 'open'
    });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const ttt  = this.getAttribute('stype');
    console.log(this);
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('stype');
    this.shadowRoot.querySelector('img').src = this.getAttribute('pic');
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if(this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }


}

window.customElements.define('service-card', ServiceCard);