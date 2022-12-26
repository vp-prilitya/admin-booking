import React from "react";
import { Figure, Form } from "react-bootstrap";
import Button from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { config } from "../../configs";

export default function SpeakersForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <div className="mt-5 mb-5 col-sm-5">
      <Form>
        <TextInputWithLabel
          placeholder={"Masukan tipe"}
          label={"Type"}
          name="type"
          value={form.type}
          type="text"
          onChange={handleChange}
        />

        <TextInputWithLabel
          placeholder={"Masukan Avatar"}
          label={"Avatar"}
          name="avatar"
          // value={form.avatar}
          type="file"
          onChange={handleChange}
        />
        {form.avatar !== "" && (
          <div>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={`${config.api_image}/${form.avatar}`}
              />

              <Figure.Caption>Perview image avatar</Figure.Caption>
            </Figure>
          </div>
        )}
        <Button
          className="mt-3"
          variant="primary"
          action={handleSubmit}
          loading={isLoading}
        >
          {edit ? "Ubah" : "Simpan"}
        </Button>
      </Form>
    </div>
  );
}
