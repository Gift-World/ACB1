import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 👇 Register the PWA Service Worker
import { registerSW } from 'virtual:pwa-register'

registerSW({
    onNeedRefresh() {
        console.log('🔄 New content available!')
    },
    onOfflineReady() {
        console.log('✅ Ready to work offline.')
    },
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
