import {Form,Button,Container,Jumbotron,Table} from 'react-bootstrap'
import Layoutstyle from '../components/Layoutstyle'
import style from '../style/style.css'
import Requestedit from '../components/Requestedit'

function Profile(){
    return(
<Layoutstyle>
<Table responsive>
  <tbody>
    <tr>
      <td>NTL ID</td>
      <td className={style.bluebaby}>125653156326</td>
    </tr>
    <tr>
      <td>Email</td>
      <td className={style.bluebaby}>amrnabil5700@gmail.com</td>
    </tr>
    <tr>
      <td>FullName</td>
      <td className={style.bluebaby}>Amr Nabil Ali</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td className={style.bluebaby}>01145700588</td>
    </tr>
    <tr>
      <td>Track</td>
      <td className={style.bluebaby}>information systems</td>
    </tr>
    <tr>
      <td>End date</td>
      <td className={style.bluebaby}>20/5/1998</td>
    </tr>
    <tr>
      <td>Required Projects/Courses per Track</td>
      <td className={style.bluebaby}>7</td>
    </tr>
    <tr>
      <td>Projects/Courses Completed</td>
      <td className={style.bluebaby}>3</td>
    </tr>
    <tr>
      <td>graduated</td>
      <td className={style.bluebaby}>yes</td>
    </tr>
  </tbody>
</Table>

<Requestedit/>

</Layoutstyle>
);
} 

export default Profile;