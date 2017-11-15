const Database = Object.create(null, {
    load: {
        value: () => JSON.parse(localStorage.getItem("Database")) || {}
    },
    save: {
        value: (db, flag) => {
            localStorage.setItem("Database", JSON.stringify(db));
            localStorage.setItem("changedKey", JSON.stringify(flag))
        }
    }
})

module.exports = Database