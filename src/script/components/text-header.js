class TextHeader extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowDOM.innerHTML = `
  
          <style>
          .headline{
              font-weight: 700;
              font-size: 3em;
              padding-right : 4%
              color : white;
          }
          h5{
            font-size  : 1em;
          }
          </style>

            <h5>PERKIRAAN CUACA HARI INI</h5>
            <h1 class="headline">Pastikan kamu mengetahui perkiraan cuaca di kotamu...</h1>
            <p class="description">
                Mengecek perkiraan cuaca dari setiap kota yang ada di seluruh dunia
            </p>
            
          `;
    }
  }
   
  customElements.define("text-header", TextHeader);