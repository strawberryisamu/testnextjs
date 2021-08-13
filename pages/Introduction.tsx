import {useState} from "react";
import {Button} from "@material-ui/core";
import {Input} from "@material-ui/core";

interface Props{
    name: string;
    age: number;
}

export const Introduction = (p: Props) => {
    return (
        <div>
            <p>自己紹介</p>
            <Button color="primary">ボタン</Button>
            <p>
                {p.name}という名前です。
                {p.age}さいです。
            </p>
        </div>
    )
}
