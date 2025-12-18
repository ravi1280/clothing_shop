import React from 'react';
import './SizingChart.css';

const SizingChart = ({ category }) => {
    const measurements = {
        'Tops': [
            { size: 'XS', chest: '32-34', waist: '24-26', length: '24' },
            { size: 'S', chest: '34-36', waist: '26-28', length: '25' },
            { size: 'M', chest: '36-38', waist: '28-30', length: '26' },
            { size: 'L', chest: '38-40', waist: '30-32', length: '27' },
            { size: 'XL', chest: '40-42', waist: '32-34', length: '28' },
        ],
        'Bottoms': [
            { size: 'XS', waist: '24-26', hips: '34-36', inseam: '28' },
            { size: 'S', waist: '26-28', hips: '36-38', inseam: '29' },
            { size: 'M', waist: '28-30', hips: '38-40', inseam: '30' },
            { size: 'L', waist: '30-32', hips: '40-42', inseam: '31' },
            { size: 'XL', waist: '32-34', hips: '42-44', inseam: '32' },
        ],
        'Dresses': [
            { size: 'XS', bust: '32-34', waist: '24-26', hips: '34-36', length: '36' },
            { size: 'S', bust: '34-36', waist: '26-28', hips: '36-38', length: '37' },
            { size: 'M', bust: '36-38', waist: '28-30', hips: '38-40', length: '38' },
            { size: 'L', bust: '38-40', waist: '30-32', hips: '40-42', length: '39' },
        ],
        'Outerwear': [
            { size: 'XS', chest: '32-34', shoulder: '14', sleeve: '31' },
            { size: 'S', chest: '34-36', shoulder: '15', sleeve: '32' },
            { size: 'M', chest: '36-38', shoulder: '16', sleeve: '33' },
            { size: 'L', chest: '38-40', shoulder: '17', sleeve: '34' },
            { size: 'XL', chest: '40-42', shoulder: '18', sleeve: '35' },
        ],
    };

    const data = measurements[category] || measurements['Tops'];

    return (
        <div className="sizing-chart">
            <h3>Size Guide</h3>
            <p className="sizing-note">All measurements are in inches</p>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            {Object.keys(data[0]).filter(key => key !== 'size').map(key => (
                                <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="size-cell">{row.size}</td>
                                {Object.entries(row).filter(([key]) => key !== 'size').map(([key, value]) => (
                                    <td key={key}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="sizing-tips">
                <h4>How to Measure</h4>
                <ul>
                    <li><strong>Chest/Bust:</strong> Measure around the fullest part</li>
                    <li><strong>Waist:</strong> Measure around the narrowest part</li>
                    <li><strong>Hips:</strong> Measure around the fullest part</li>
                    <li><strong>Inseam:</strong> Measure from crotch to ankle</li>
                </ul>
            </div>
        </div>
    );
};

export default SizingChart;
