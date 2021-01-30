
export default function DetailSheet() {
    return (
        <div className="register" >
            <div className="text-center">
                <img src="assets/images/logoicon1.png"
                    width="120"
                    className="mb-4"
                    alt="Avatar" style={{ objectFit: 'cover', filter: 'drop-shadow(0px 10px 30px #ffa400)' }} />
            </div>
            <form action="#" method="POST" className="mx-auto text" style={{ color: '#f5f5dc' }}>
                <div className="row mx-md-5 mx-lg-5">
                    <div className="col-lg-6">
                        <label for="input-username" className="pr-2">ไอดี : </label><br />
                        <input type="text" className="input-field" id="input-username" placeholder="username" />
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
                <div className="row mx-md-5 mx-lg-5">
                    <div className="col-lg-6">
                        <label for="input-password" className="pr-2">รหัสผ่าน : </label><br />
                        <input type="password" className="input-field" id="input-password" placeholder="รหัสผ่าน" />
                    </div>
                    <div className="col-lg-6">
                        <label for="input-password" className="pr-2">ยืนยันรหัสผ่าน : </label><br />
                        <input type="password" className="input-field" id="input-password" placeholder="ยืนยันรหัสผ่าน" />
                    </div>
                </div>
                <div className="row mx-md-5 mx-lg-5">
                    <div className="col-lg-6">
                        <label for="input-fristname" className="pr-2">ชื่อจริง </label><br />
                        <input type="text" className="input-field" id="input-fristname" placeholder="กรอกชื่อจริงที่ตรงกับบัญชีเท่านั้น" />
                    </div>
                    <div className="col-lg-6">
                        <label for="input-lastname" className="pr-2">นามสกุล </label><br />
                        <input type="text" className="input-field" id="input-lastname" placeholder="กรอกนามสกุลจริงที่ตรงกับบัญชีเท่านั้น" />
                    </div>
                </div>
                <div className="row mx-md-5 mx-lg-5">
                    <div className="col-lg-6">
                        <label for="input-lastname" className="pr-2">เลือกธนาคาร </label><br />
                        <select placeholder="เลือกธนาคาร">
                            <option value="1">ธนาคารกสิกร</option>
                            <option value="1">ธนาคารกสิกรไทย</option>
                            <option value="1">ธนาคารกรุงเทพ</option>
                            <option value="1">ธนาคารกรุงไทย</option>
                            <option value="1">ธนาคารทหารไทย</option>
                            <option value="1">ธนาคารกรุงศรีอยุธยา</option>
                            <option value="1">ธนาคารไทยพาณิชย</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="input-lastname" className="pr-2">เลขบัญชีธนาคาร </label><br />
                        <input type="text" className="input-field" id="input-lastname" placeholder="กรอกนามสกุลจริงที่ตรงกับบัญชีเท่านั้น" />
                    </div>
                </div>
                <div className="row mx-md-5 mx-lg-5">
                    <div className="col-lg-6">
                        <label for="input-lastname" className="pr-2">เบอร์ </label><br />
                        <input type="text" className="input-field" id="input-lastname" placeholder="กรอกนามสกุลจริงที่ตรงกับบัญชีเท่านั้น" />
                    </div>
                    <div className="col-lg-6">
                        <label for="input-lastname" className="pr-2">ไอดีไลน์ </label><br />
                        <input type="text" className="input-field" id="input-lastname" placeholder="กรอกนามสกุลจริงที่ตรงกับบัญชีเท่านั้น" />
                    </div>
                </div>
                <div className="form-group text-center">
                    <button type="submit" className="mybtn1">ถัดไป</button>
                </div>
            </form>
        </div>
    );
}
