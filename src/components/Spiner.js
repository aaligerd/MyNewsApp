import React from 'react'
import loading from './loading.gif'

export default function Spiner() {
    return (
        <div className="text-center">
                <div class="spinner-border m-5" role="status" >
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
