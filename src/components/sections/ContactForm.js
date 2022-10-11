const ContactForm = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Formulaire de contact</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
            <form id="cform" method="post">
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input type="text" name="name" placeholder="Nom" />
                  </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      type="text"
                      name="email"
                      placeholder="Adresse Email"
                    />
                  </div>
                </div>
                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <textarea
                      name="message"
                      placeholder="Votre message"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="align-left">
                <a href="#" className="button">
                  <span className="text">Envoyez message</span>
                  <span className="arrow" />
                </a>
              </div>
            </form>
            <div className="alert-success">
              <p>Votre message a été envoyé avec succès.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  )
}
export default ContactForm
