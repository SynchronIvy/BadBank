function AllData(){
    const ctx = React.useContext(UserContext);
    return (
        <div className="p-3">
        <Card
          bgcolor="primary"
          header="All Data"
          body= {(
            <>
            <li>Make user submissions appear here somehow</li>
            <li>{JSON.stringify(ctx)}</li></>
          )}
          
        />
        </div>
       
    );
}