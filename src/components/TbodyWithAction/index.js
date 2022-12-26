import React from "react";
import SButton from "../Button";
import { useNavigate } from "react-router-dom";
import { Image, Spinner } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import moment from "moment";
import { config } from "../../configs";
import Loading from "../Loading";

function TbodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  customAction,
  actionNotDisplay,
  status,
}) {
  const navigate = useNavigate();
  return (
    <tbody>
      {status === "process" ? (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            <div className="flex items-center justify-center">
              <Loading variant="primary" size="sm" />
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && (
                    <td key={key}>
                      {key === "avatar" ? (
                        <Image
                          height={60}
                          width={60}
                          roundedCircle
                          src={`${config.api_image}/${data[key]}`}
                        />
                      ) : key === "date" ? (
                        moment(data[key]).format("DD-MM-YYYY, h:mm:ss a")
                      ) : (
                        data[key]
                      )}
                    </td>
                  )
              )}
              {!actionNotDisplay && (
                <td className="text-center">
                  <ButtonGroup size="sm">
                    {customAction && customAction(data._id, data.statusEvent)}
                    {editUrl && (
                      <SButton
                        action={() => navigate(`${editUrl}/${data._id}`)}
                      >
                        Edit
                      </SButton>
                    )}
                    {deleteAction && (
                      <SButton action={() => deleteAction(data._id)}>
                        Hapus
                      </SButton>
                    )}
                  </ButtonGroup>
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
