import React, {Component} from 'react'
import "../main/Calculator.css"

export default class Calculator extends Component{
    render() {
        return(
        
            <div className="calculator">
                <button label="AC"/>
                <button label="/"/>
                <button label="7"/>
                <button label="8"/>
                <button label="9"/>
                <button label="*"/>
                <button label="-"/>
                <button label="2"/>
                <button label="3"/>
                <button label="+"/>
                <button label="0"/>
                <button label="."/>
                <button label="1"/>
                <button label="4"/>
                <button label="5"/>
                <button label="6"/>
                <button label="0"/>

            </div>
        )
    }
}