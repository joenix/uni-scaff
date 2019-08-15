/**
 * Uni-UI Components
 * not work: `import * as UniUI`
 * refer to: `@dcloudio/uni-ui/lib`
 * ======== ======== ========
 */
import {
  uniBadge,
  uniCalendar,
  uniCard,
  uniCollapse,
  uniCollapseItem,
  uniCountDown,
  uniDrawer,
  uniFab,
  uniGrid,
  uniGridItem,
  uniIcon,
  uniIndexedList,
  uniList,
  uniListItem,
  uniLoadMore,
  uniNavBar,
  uniNoticeBar,
  uniNumberBox,
  uniPagination,
  uniPopup,
  uniRate,
  uniSegmentedControl,
  uniStatusBar,
  uniSteps,
  uniSwipeAction,
  uniSwiperDot,
  uniTag
} from "@dcloudio/uni-ui";

export default {
  install(Vue) {
    const components = {
      uniBadge,
      uniCalendar,
      uniCard,
      uniCollapse,
      uniCollapseItem,
      uniCountDown,
      uniDrawer,
      uniFab,
      uniGrid,
      uniGridItem,
      uniIcon,
      uniIndexedList,
      uniList,
      uniListItem,
      uniLoadMore,
      uniNavBar,
      uniNoticeBar,
      uniNumberBox,
      uniPagination,
      uniPopup,
      uniRate,
      uniSegmentedControl,
      uniStatusBar,
      uniSteps,
      uniSwipeAction,
      uniSwiperDot,
      uniTag
    };

    Object.keys(components).map(name =>
      name.replace(/^uni(.*)/, (word, $1) =>
        Vue.component(
          "uni" + $1.replace(/[A-Z]/g, w => `-${w.toLowerCase()}`),
          components[name]
        )
      )
    );
  }
};
