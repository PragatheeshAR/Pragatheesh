import '../Assests/css/style.css';
const Student = ({name,reg,ph,email,cgpa})=>{
    return(
        <>
        <div >
                <h1><b>Student Details</b></h1>
            <table style={{justifyContent:'center',alignItems:'center'}} cellPadding={30}cellSpacing={10}>
                <tr>
                    <td>Name</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Reg No</td>
                    <td>{reg}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{ph}</td>
                </tr>
                <tr>
                    <td>Email Id</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>CGPA</td>
                    <td>{cgpa}</td>
                </tr>
            </table>
        </div>
        </>
    )

}
export default Student;