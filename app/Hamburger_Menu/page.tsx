export default function HamburgerMenuPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '20px',
      }}
    >
      {/* Left Half of Menu */}
      <div style={{ flex: 1, paddingRight: '40px', marginTop: '2%' }}>
       

        {/* Specials */}
        <h2><u>Specials</u></h2>
        <p>
          hot honey chicken burger ------ $19.99<br />
          hot honey chicken bites -------- $18.00<br />
        </p>
        <br />
        {/* Burgers */}
        <h2><u>Burgers</u></h2>
        <p>
          crunchy chicken burger -------- $16.90<br />
          micro chicken burger ----------- $14.50<br />
          spicy beef burger ---------------- $16.50 <br />
          BBQ beef burger ---------------- $15.00<br />
        </p>
      </div>

      {/* Center Half of Menu */}
      <div style={{ flex: 1, textAlign: 'left', padding: '0 40px', marginTop: '2%' }}>
        {/* Kebab */}
        <h2><u>Kebab</u></h2>
        <p>
          crunchy chicken kebab -------- $16.90<br />
          BBQ beef kebab ---------------- $14.50<br />
          Mixed kebab --------------------- $16.50<br />
        </p>
        <br />
        {/* Sides */}
        <h2><u>Sides</u></h2>
        <p>
          large Chips + 1.1L drink ------- $9.99<br />
          Small chips ----------------------- $3.50<br />
          Large chips -----------------------  $5.99<br />
          1.1L drink ------------------------- $6.00<br />
        </p>
      </div>

      {/* Images */}
      <div style={{ flex: 1, textAlign: 'right' }}>
        <img
          src="/images/burger1.jpg"
          alt="Chicken Burger"
          style={{
            maxWidth: '200px',
            height: '261px',
            borderRadius: '20px',
            marginBottom: '20px',
            marginRight: '20px'            
          }}
        />
        <img
          src="/images/burger2.jpg"
          alt="BBQ Burger"
          style={{
            maxWidth: '300px',
            height: '261px',
            borderRadius: '20px',
            marginBottom: '20px',
            marginRight: '20px'
          }}
        />
      </div>
    </div>
  );
}
