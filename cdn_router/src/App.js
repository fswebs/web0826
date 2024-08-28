function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/hello">
                    <h1>Hello</h1>
                </Route>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
