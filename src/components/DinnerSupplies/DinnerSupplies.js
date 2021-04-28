function DinnerSupplies(prop) {
    return (
        <section>
            <h2>Dinner Supplies</h2>
      <div>
        Spoons: {prop.list.length * 2}
      </div>
      <div>
        Forks: {prop.list.length * 2}
      </div>
      <div>
        Knives: {prop.list.length * 2}
      </div>
        </section>
    );
}
export default DinnerSupplies;