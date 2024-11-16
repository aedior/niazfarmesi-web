import { ComponentProps, useState } from "react";
import { Input as inp, Label as lbl, Button as btn } from "reactstrap";
import { useMap, MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import Image from "next/image";

export function Input(props: ComponentProps<typeof inp>) {
  return <input {...props} />;
}
export function TitledInput(props: {
  input: ComponentProps<typeof inp>;
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
      <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
        {props.title}
      </p>
      <input
        dir={"rtl"}
        className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 
        w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
        {...props.input}
      />
      {props.hint !== undefined ? (
        <p className="rounded-0 w-full h-fit text-1653c3 text-right text-10px">
          {props.hint}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
export function TitledNumber(props: {
  input: ComponentProps<typeof inp>;
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
      <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
        {props.title}
      </p>
      <input
        type="number"
        pattern="[0-9]*"
        className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 
        w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
        {...props.input}
      />
      {props.hint !== undefined ? (
        <p className="rounded-0 w-full h-fit text-1653c3 text-right text-10px">
          {props.hint}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
export function TitledTextArea(props: {
  input: any;
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
      <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
        {props.title}
      </p>
      <textarea
        dir={"rtl"}
        className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 
        w-full h-40 min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
        {...props.input}
      />
      {props.hint !== undefined ? (
        <p className="rounded-0 w-full h-fit text-1653c3 text-right text-10px">
          {props.hint}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export function Check(props: ComponentProps<typeof inp>) {
  return <input type="checkbox" {...props} />;
}

export function Label(props: ComponentProps<typeof lbl>) {
  return <label {...props} />;
}

export function Num(props: ComponentProps<typeof lbl>) {
  return <label {...props} />;
}

export function Button(props: ComponentProps<typeof btn>) {
  return <button {...props} />;
}

export function InpNum(props: {
  value?: number;
  onChange: (num: number) => void;
}) {
  return (
    <input
      type="number"
      value={props.value}
      pattern="[0-9]*"
      onChange={(e) => {
        props.onChange(parseInt(e.target.value));
      }}
    />
  );
}

export function InpLabel(props: {
  value?: string;
  onChange: (num: string) => void;
}) {
  return (
    <input
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    />
  );
}

export function Select(props: {
  choices: any;
  value: any;
  handler: any;
  placeholder?: string;
  className?: string;
}) {
  return (
    <select
      dir={"rtl"}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(data) => props.handler(parseInt(data.target.value))}
      className={"outline-none " + props.className}
    >
      {Object.entries(props.choices).map(([key, value]) => (
        <option value={key}>{value as string}</option>
      ))}
    </select>
  );
}
export function TitledSelect(props: {
  title: string;
  hint?: string;
  choices: any;
  value: any;
  handler: any;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
      <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
        {props.title}
      </p>
      <Select {...props} />
      {props.hint !== undefined ? (
        <p className="rounded-0 w-full h-fit text-1653c3 text-right text-10px">
          {props.hint}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export function FileUpload(props: {
  name: string;
  value: any;
  handler: any;
  text: string;
  className?: string;
}) {
  return (
    <>
      <label className={"w-44 " + props.className} htmlFor={props.name}>
        {props.text}
      </label>
      <input className="hidden" id={props.name} type="file" />
    </>
  );
}

function MapHandler(props: { handler: any }) {
  const map = useMap();
  useMapEvent("dragend", () => {
    props.handler(map.getCenter());
  });
  useMapEvent("zoomend", () => {
    props.handler(map.getCenter());
  });
  return;
}
export function MapInput(props: { handler: any }) {
  return (
    <div className="flex flex-col w-full h-191px space-y-10px bg-ffffff overflow-hidden relative items-center justify-center border-2 rounded-xl">
      <div className="absolute z-50">
        <Image
          src={"/locationPin.svg"}
          alt={"logo"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="w-8 h-8"
        ></Image>
      </div>
      <MapContainer center={[38.242579802933555, 48.29285396263003]} zoom={13}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapHandler handler={props.handler} />
      </MapContainer>
    </div>
  );
}
