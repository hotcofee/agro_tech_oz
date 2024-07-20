import React from 'react'
import { v4 as id } from 'uuid'
import { Toaster, toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Code() {
    let id_user = id()
    const copy = () => {
        toast.success("Code copy to clipboard")
        navigator.clipboard.writeText(id())
    }
    return (
        <div>
            <Toaster position='bottom-right' />
            <div className="code_box">
                <div className="code_center_save">
                    <div className="head_code_box">
                        <p className="subtitle" style={{ fontSize: "30px" }}> Save this code</p>
                        <span>Valid for this user</span>
                    </div>
                    <div className="body_code_box">
                        <div className="view_code">
                            <input type="text" readOnly value={id_user} /><div className='icon' onClick={copy}><ion-icon name="copy-outline"></ion-icon></div>
                        </div>
                        <div className="sub_body" style={{ margin: "20px 0" }}>
                            <span style={{ color: "grey", fontSize: "14px" }}>Use this code to add workers in your dashboard and make some task!</span>
                        </div>
                    </div>
                    <button><Link to="/panel/8888">OK</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Code
