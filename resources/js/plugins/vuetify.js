import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import 'font-awesome/css/font-awesome.min.css'

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: "fa4",
        values: {
            cancel: 'fa4 fa-ban',
            send: 'fa4 fa-send',
            menu: 'fa4 fa-ellipsis-v',
          },
    },
    // theme: {
    //     themes: {
    //         light: {
    //             primary: colors.red.darken1, // #E53935
    //             secondary: colors.red.lighten4, // #FFCDD2
    //             accent: colors.indigo.base // #3F51B5
    //         }
    //     }
    // }
};

export default new Vuetify(opts);
