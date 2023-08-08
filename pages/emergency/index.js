import { Maps } from './map';
export default function index() {
  const mapcode = `<div class="mapouter"><div class="gmap_canvas"><iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br><style>.mapouter{position:relative;text-align:right;height:510px;width:770px;}</style><a href="https://embedgooglemap.2yu.co">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:510px;width:770px;}</style></div></div>`;
  return (
    <div className="news">
      <h2>Emergency Number:9986407307</h2>
      <div>
        <div>Description of Emergency:</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        <div>MAP:</div>
        <Maps />
        Trace Location:Click
      </div>
    </div>
  );
}
