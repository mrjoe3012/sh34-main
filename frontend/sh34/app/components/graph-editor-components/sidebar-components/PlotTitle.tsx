import { useConfig } from "@app/graph-editor/ConfigContext";

export const PlotTitle = () => {
  const {config} = useConfig();
  return (
    <div className='flex p-2 my-2'>
      <div className='text-center w-full self-center'>
        <p className='font-semibold text-2xl'>{config.labellingOptions.title.plotTitle}</p>
      </div>
    </div>
  );
};