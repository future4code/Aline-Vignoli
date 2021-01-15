import connection from './connection';

const getUsers = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListUser;
    `)
  
    console.log(result[0])
    // return result[0][0]
}

getUsers();