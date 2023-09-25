function AllData(){
    const ctx = React.useContext(UserContext);
    return (
        <div className="p-3">
        <Card
          bgcolor="primary"
          header="All Data"
          body= {(
            <>
            {ctx.map(function(data) {
                return (
                    <li>{data}</li>
                )
            })}
            </>
          )}
          
        />
        </div>
       
    );
}