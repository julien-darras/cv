import Isotope from 'isotope-layout'
import { Fragment, useEffect, useRef, useState } from 'react'
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.grid-items', {
        itemSelector: '.grid-item',
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      })
    }, 1000)
    //     return () => isotope.current.destroy();
  }, [])
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` })
    }
  }, [filterKey])
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key)
  }
  const activeBtn = (value) => (value === filterKey ? 'active' : '')

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Portfolio</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          {/* <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div> */}
          {/* <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              Image
            </label>
          </div> */}
          {/* <div
            className={`f_btn ${activeBtn("gallery")}`}
            onClick={handleFilterKeyChange("gallery")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="gallery" />
              Gallery
            </label>
          </div> */}
          {/* <div
            className={`f_btn ${activeBtn("video")}`}
            onClick={handleFilterKeyChange("video")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="video" />
              Video
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("music")}`}
            onClick={handleFilterKeyChange("music")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="music" />
              Music
            </label>
          </div> */}
          {/* <div
            className={`f_btn ${activeBtn('design')}`}
            onClick={handleFilterKeyChange('design')}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="design" />
              Content
            </label>
          </div> */}
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item video */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="has-popup-video"
                >
                  <img src="images/works/work6.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="name has-popup-video"
                >
                  Infinity Logo
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div> */}
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-2" className="has-popup-media">
                  <img
                    src="images/works/Screenshot_20220919-154238_GeoBroc.jpg"
                    alt=""
                  />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    {/* <div className="image">
                      <img
                        src="images/works/Screenshot_20220919-154238_GeoBroc - Copie.jpg"
                        alt=""
                      />
                    </div> */}
                    <div className="desc">
                      <div className="post-box">
                        <h1>GeoBroc</h1>
                        <div className="blog-detail">
                          Application de geolocalisation
                        </div>
                        <div className="blog-content">
                          <p>
                            Au cours de ma formation en react native, j'ai eu
                            l'occasion de développer en groupe une application
                            de géolocalisation de brocanteurs pour des clients
                          </p>
                          <p>
                            Pour développer cette application, j'ai intégré une
                            carte qui géolocalise l'utilisateur et j'ai
                            implémenté différents marqueurs qui représentent
                            différents types de magasins
                          </p>
                        </div>
                        {/* <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-2" className="name has-popup-media">
                  GeoBroc
                </a>
                {/* <div className="category">Content</div> */}
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  )
}
export default RecentWorksDefault
