
export default function TheBillboard() {
    return (
        <>
            <div
                id="topbar2"
                className="d-xs-none d-sm-none d-md-none d-lg-block fxx tt_open2"
            >
                <a
                    className="tt_l mb-5 tt_img_fixed2"
                    target="_blank"
                    href="https://www.google.com"
                >
                    <img src="assets/images/billboard/bank.png" />
                </a>

                <a
                    className="tt_l mb-5 tt_img_fixed2"
                    target="_blank"
                    href="https://www.google.com"
                >
                    <img src="assets/images/billboard/register-web.png" />
                </a>

                <a
                    className="tt_l mb-5 tt_img_fixed2"
                    target="_blank"
                    href="https://www.google.com"
                >
                   <img src="assets/images/billboard/register-line.png" />
                </a>

            </div>
            <div id="topbar" className="fxx">
                <a className="tt_img_fixed" target="_blank" href="">
                    <img src="assets/images/line.png" />
                    <span className="tt_tx_line"> ติดต่อเจ้าหน้าที่</span>
                </a>
            </div>
        </>
    );
}
