import {useState} from "react";
import {Button} from "@material-ui/core";
import {Input} from "@material-ui/core";


export default function Home() {
    return (
        <div>
            <p>自己紹介</p>
            <Button color="primary">ボタン</Button>
            <p>
                カバオという名前です。
                21さいです。
            </p>
        </div>
    )
}
