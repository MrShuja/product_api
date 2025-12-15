let db;

export const setDB = (connection)=>{
    db=connection
}

export const getAllProducts = async ()=>{
    const [rows] = await db.query("SELECT * FROM product_table4");
    return rows;
};

export const getProductById = async (id)=>{
    const [rows] = await db.query("SELECT * FROM product_table4 WHERE id = ?", [id]);
    return rows[0];
};

export const createProduct = async (data)=>{
    const {name, price, description} = data;
    const [result] =  await db.query(
        "INSERT INTO product_table4 (name, price, description) VALUES (?, ?, ?)",
        [name, price, description]
    );
    return { id: result.insertid, ...data };
};

export const updateProduct = async (id, data)=>{
    const {name, price, description} = data;
    await db.query(
        "UPDATE product_table4 SET name = ?, price = ?, description = ? ",
        [name, price, description, id]
    );
    return {id, ...data};
};

export const deleteProduct = async (id)=>{
    await db.query("DELETE FROM product_table4 WHERE id = ?", [id]);
    return {message:"Product deleted"}
}