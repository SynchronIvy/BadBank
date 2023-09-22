function Deposit(){
    const [deposit, setDeposit] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);
    const [balance, setBalance] = React.useState(0);
    const ctx = React.useContext(UserContext);

    console.log(balance);
    
    function handleDeposit(){
        setBalance(balance + deposit);
        console.log(deposit);
        return;
    }

    return (
        <div className="p-3">
        <Card
            bgcolor= "primary"
            header= "Make a Deposit"
            body= {(
                <>
                    Account Balance: {balance} <br/>
                    Deposit Amount<br/>
                    <input type="number" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => {
                        setDisabled(false);
                        setDeposit(e.currentTarget.value);
                        }
                    }/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={disabled}>Submit Deposit</button>
                </>
            )} 
        />
        </div>
    );

    console.log(balance + deposit)
}