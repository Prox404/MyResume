import PDFViewer from "~/components/PDFViewer";
import MyCV from "~/assets/files/TranCongTri_CV.pdf";
import Text from "~/components/Text"
import classNames from "classnames/bind";

import styles from "./MyResume.module.scss";

function MyResume() {
    const cx = classNames.bind(styles);
    return (<>
        {/* <h1>MyResume</h1> */}
        <Text
            tag="h1"
            variant="big-text"
            className={cx("sp-space__title")}
            font="cormorant-upright"
            textTransform="uppercase"
            mouseTarget={true}
        >My Resume</Text>
        <PDFViewer
            pdfUrl={MyCV}
        />
    </>);
}

export default MyResume;