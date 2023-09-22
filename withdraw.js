function Withdraw(){
    const [withdrawal, setWithdrawal] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);
    const [balance, setBalance] = React.useState(0);
    const ctx = React.useContext(UserContext);

    function handleWithdrawal(){
        setBalance(balance - withdrawal);
        console.log(withdrawal);
        return;
    }

    return (
        <div className="p-3">
        <Card
            bgcolor= "primary"
            header= "Make a Withdrawal"
            body= {(
                <>
                    Account Balance: {balance} <br/>
                    Deposit Amount<br/>
                    <input type="number" className="form-control" id="withdraw" placeholder="Enter deposit amount" value={withdrawal} onChange={e => {
                        setDisabled(false);
                        setWithdrawal(e.currentTarget.value);
                        }
                    }/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleWithdrawal} disabled={disabled}>Submit Withdrawal</button>
                </>
            )} 
        />
        </div>
    );
}