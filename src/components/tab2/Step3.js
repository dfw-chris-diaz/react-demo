import React from 'react';
import Legend from './legend';

export default function Step3() {
    return (
      <div>
        <h1 id="setp3_hdr"><span className="brightRedText">Step 3</span></h1>
        <Legend /><br />
        <table style={{height: '37px'}} className="hdrTbl1" width="830">
            <tbody>
                <tr>
                    <td style={{width: '820px'}} className="hdrTbl1Text">
                        <h5><strong><span>Step 3</span></strong></h5>
                    </td>
                </tr>
            </tbody>
        </table>
        <p><span className="blackText">Fil Out the form below.</span></p>
        <table style={{height: '418px', width: '832px', border: '1px'}}>
            <tbody>
                <tr style={{height: '129.533px'}}>
                    <td style={{width: '420.55px', height: '129.533px'}}>Out Some Text Here</td>
                    <td className="yellowBackground">&nbsp;</td>
                </tr>
                <tr style={{height: '18px'}}>
                    <td style={{width: '420.55px', height: '18px'}}>Pick one of these</td>
                    <td className="lightBlueBackground">&nbsp;</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
}