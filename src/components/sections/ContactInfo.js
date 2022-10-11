const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Me contacter</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82240.19432989505!2d2.2146415047653965!3d49.898689307597884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e78413d78b760b%3A0x40af13e816220e0!2sAmiens!5e0!3m2!1sfr!2sfr!4v1665506971612!5m2!1sfr!2sfr"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Addresse . . . . .</strong> Amiens, France
              </li>
              <li>
                <strong>Email . . . . .</strong> julien.darras12@gmail.com{' '}
              </li>
              <li>
                <strong>Phone . . . . .</strong> 40 74 52 10 06
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  )
}
export default ContactInfo
