import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default async function Image() {
    let dineshBase64 = '';
    let abinayaBase64 = '';

    try {
        const dineshBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'dinesh.jpg'));
        const abinayaBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'abinaya.jpg'));
        dineshBase64 = `data:image/jpeg;base64,${dineshBuffer.toString('base64')}`;
        abinayaBase64 = `data:image/jpeg;base64,${abinayaBuffer.toString('base64')}`;
    } catch (e) {
        // Fallback gracefully if read error
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    backgroundColor: '#FAF7F2',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Left Side Groom */}
                {dineshBase64 && (
                    <img
                        src={dineshBase64}
                        style={{ position: 'absolute', left: 40, top: 40, width: 280, height: 550, objectFit: 'contain', borderRadius: 24 }}
                    />
                )}

                {/* Right Side Bride */}
                {abinayaBase64 && (
                    <img
                        src={abinayaBase64}
                        style={{ position: 'absolute', right: 40, top: 40, width: 280, height: 550, objectFit: 'contain', borderRadius: 24 }}
                    />
                )}

                {/* Center Content Card */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    padding: '40px 70px',
                    borderRadius: '50px',
                    border: '3px solid #D4AF37',
                    boxShadow: '0 12px 40px rgba(74, 14, 23, 0.15)'
                }}>
                    <div style={{ fontSize: 22, color: '#D4AF37', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 10, fontWeight: 'bold' }}>
                        Wedding Invitation
                    </div>
                    <div style={{ fontSize: 62, color: '#4A0E17', fontWeight: 'bold', fontFamily: 'serif' }}>
                        Dinesh & Abinaya
                    </div>
                    <div style={{ fontSize: 22, color: '#7A1C29', marginTop: 20, textTransform: 'uppercase', letterSpacing: '6px', fontWeight: 'bold' }}>
                        Nov 10 (Reception) & Nov 11 (Muhurtham)
                    </div>
                    <div style={{ fontSize: 20, color: '#4A0E17', marginTop: 15, opacity: 0.85, fontFamily: 'serif' }}>
                        Sree Lakshmi Narayan Mahal • Thudiyalur
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
