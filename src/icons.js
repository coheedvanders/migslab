import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFlask,
  faSkullCrossbones,
  faQuidditch,
  faMagic,
  faSmile,
  faCode,
  faInfo,
  faCheck,
  faSpinner,
  faHome,
  faInfoCircle,
  faHandHolding,
  faCog,
  faStickyNote,
  faPenNib,
  faGlobeAsia,
  faGlobe,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faFlask,
  faSkullCrossbones,
  faQuidditch,
  faMagic,
  faSmile,
  faCode,
  faInfo,
  faCheck,
  faSpinner,
  faHome,
  faInfoCircle,
  faHandHolding,
  faCog,
  faStickyNote,
  faPenNib,
  faGlobeAsia,
  faGlobe,
  faFileSignature
);

Vue.component("fa-icon", FontAwesomeIcon);
