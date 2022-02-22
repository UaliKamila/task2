import ActionMenu from '../../components/action/ActionMenu';
import AssignedDetails from '../../components/assignedDetails/AssignedDetails';
import Description from '../../components/description/Description';
import InnerPerform from '../../components/innerPerform/InnerPerform';
import Links from '../../components/links/Links';
import OuterPerform from '../../components/outerPerform/OuterPerform';
import RegDetails from '../../components/regDetails/RegDetails';

import './baseinfo.css'

export default function BaseInfo() {
  return (
    <div>
      <div className="details">
        <RegDetails />
        <AssignedDetails />
      </div>
      <Description />
      <div className="performs">
        <InnerPerform />
        <OuterPerform />
      </div>
      <Links />
    </div>
  );
}
