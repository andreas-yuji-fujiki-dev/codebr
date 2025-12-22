// css
import './domain-banner.css'

// component function
export default function FreeCodeDomain(){
  return (
    <div className="domain-banner-container">
      <div className="brutalist-container">
        <input
          placeholder="seuprojeto.code.com.br"
          className="brutalist-input smooth-type"
          type="text"
        />
        <label className="brutalist-label">domínio code.com.br grátis!</label>
      </div>
    </div>
  )
}