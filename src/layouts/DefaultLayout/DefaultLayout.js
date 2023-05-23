import styles from "./DefaultLayout.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

import Header from "~/components/core/Header";

let cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={styles.container}>
        {/* <Sidebar /> */}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
