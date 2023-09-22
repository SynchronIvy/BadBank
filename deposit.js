function Deposit(){
    const [deposit, setDeposit] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);
    const [balance, setBalance] = React.useState(0);
    const ctx = React.useContext(UserContext);

    function handleDeposit(){
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
                    <input type="input" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => {
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
}