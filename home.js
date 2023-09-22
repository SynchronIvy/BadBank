function Home(){
    return (
      <div className="p-3">
      <Card
        bgcolor="danger"
        txtcolor="black"
        header="Bad Bank Home Page"
        title="Welcome to the Bank"
        text="You can use the Bank, but it has no security features whatsoever, so keep your secrets to yourself!"
        body= {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />
      </div>
    );
}