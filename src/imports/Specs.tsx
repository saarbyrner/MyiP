import svgPaths from "./svg-0c184gthws";

function Name() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[64px] text-black">{`<Drawer-Left>`}</p>
        </div>
      </div>
    </div>
  );
}

function ListItemText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#3b4960] text-[20px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
    </div>
  );
}

function KeyboardDoubleArrowLeftOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KeyboardDoubleArrowLeftOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KeyboardDoubleArrowLeftOutlined">
          <g id="Vector">
            <path d={svgPaths.p1bef580} fill="var(--fill-0, #3B4960)" />
            <path d={svgPaths.p3cd92400} fill="var(--fill-0, #3B4960)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <KeyboardDoubleArrowLeftOutlined />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function MinHeight() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container />
      <DividerHorizontal />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="<List>">
      <Item2 />
    </div>
  );
}

function Paper() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="<Paper>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <List />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(59,73,96,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DrawerLeft() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1024px] items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[340px]" data-name="<Drawer-Left>">
      <Paper />
    </div>
  );
}

function Dot() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerDrawerLeft() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-194px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: <Drawer-Left>">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot />
    </div>
  );
}

function Dot1() {
  return (
    <div className="absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0 translate-x-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerPaper() {
  return (
    <div className="absolute h-[48px] left-1/2 overflow-clip top-[calc(50%-468.5px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Marker: <Paper>">
      <div className="absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-px" data-name="Rectangle" />
      <Dot1 />
    </div>
  );
}

function Dot2() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerItem() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-194px)] overflow-clip top-[calc(50%-408px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Item #1">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot2 />
    </div>
  );
}

function Artwork() {
  return (
    <div className="bg-[#f2f2f2] h-[1089px] min-w-[580px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <DrawerLeft />
      <div className="absolute bg-[#bbdefb] h-[24px] left-[120px] top-[33px] w-[340px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[120px] top-[33px] w-[25.707px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[436px] top-[33px] w-[25.707px]" />
      <MarkerDrawerLeft />
      <MarkerPaper />
      <MarkerItem />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[98px] w-[340px]" />
    </div>
  );
}

function TypeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Drawer-Left>`}</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">100% of container</p>
      </div>
    </div>
  );
}

function Attribute() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Height:</p>
      </div>
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">340</p>
      </div>
    </div>
  );
}

function Attribute1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Width:</p>
      </div>
      <Component1 />
    </div>
  );
}

function Attributes() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute />
      <Attribute1 />
    </div>
  );
}

function Dot3() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function AnatomyItem() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element />
      <Attributes />
      <Dot3 />
    </div>
  );
}

function TypeIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon1 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Paper>`}</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#FFFFFF</p>
      </div>
    </div>
  );
}

function Attribute2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Background color:</p>
      </div>
      <Component2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#3B4960, 12%</p>
      </div>
    </div>
  );
}

function Attribute3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border color:</p>
      </div>
      <Component3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border weight:</p>
      </div>
      <Component4 />
    </div>
  );
}

function Attributes1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute2 />
      <Attribute3 />
      <Attribute4 />
    </div>
  );
}

function Dot4() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function AnatomyItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element1 />
      <Attributes1 />
      <Dot4 />
    </div>
  );
}

function TypeIcon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element2() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon2 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Item #1</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<ListItem>`}</p>
      </div>
    </div>
  );
}

function Attribute5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Depends on:</p>
      </div>
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot?:</p>
      </div>
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot?:</p>
      </div>
      <Component7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot:</p>
      </div>
      <Component8 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot:</p>
      </div>
      <Component9 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Divider:</p>
      </div>
      <Component10 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Second. Text:</p>
      </div>
      <Component11 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dense:</p>
      </div>
      <Component12 />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dis. Gutters:</p>
      </div>
      <Component13 />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">Enabled</p>
      </div>
    </div>
  );
}

function Attribute14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">State:</p>
      </div>
      <Component14 />
    </div>
  );
}

function Attributes2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute5 />
      <Attribute6 />
      <Attribute7 />
      <Attribute8 />
      <Attribute9 />
      <Attribute10 />
      <Attribute11 />
      <Attribute12 />
      <Attribute13 />
      <Attribute14 />
    </div>
  );
}

function Dot5() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function AnatomyItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element2 />
      <Attributes2 />
      <Dot5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <AnatomyItem />
      <AnatomyItem1 />
      <AnatomyItem2 />
    </div>
  );
}

function Exhibit() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Artwork />
      <Content />
    </div>
  );
}

function Anatomy() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black">Basic</p>
          <Exhibit />
        </div>
      </div>
    </div>
  );
}

function ListItemText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#3b4960] text-[20px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
    </div>
  );
}

function KeyboardDoubleArrowLeftOutlined1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KeyboardDoubleArrowLeftOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KeyboardDoubleArrowLeftOutlined">
          <g id="Vector">
            <path d={svgPaths.p1bef580} fill="var(--fill-0, #3B4960)" />
            <path d={svgPaths.p3cd92400} fill="var(--fill-0, #3B4960)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <KeyboardDoubleArrowLeftOutlined1 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText1 />
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function MinHeight1() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal1() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight1 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container1 />
      <DividerHorizontal1 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="<List>">
      <Item3 />
    </div>
  );
}

function ListItemText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3b4960] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Section
      </p>
    </div>
  );
}

function ExpandMoreOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandMoreOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandMoreOutlined">
          <path d={svgPaths.p3f91a100} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandMoreOutlined />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText2 />
          <IconButton2 />
        </div>
      </div>
    </div>
  );
}

function MinHeight2() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal2() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight2 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container2 />
      <DividerHorizontal2 />
    </div>
  );
}

function Item5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item #1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-[16px] relative w-full">
          <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[#1f2d44] text-[14px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Subheader
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItemText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3b4960] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Section
      </p>
    </div>
  );
}

function ExpandLessOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandLessOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandLessOutlined">
          <path d={svgPaths.p19f173c0} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandLessOutlined />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText3 />
          <IconButton3 />
        </div>
      </div>
    </div>
  );
}

function MinHeight3() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal3() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight3 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="bg-[rgba(59,73,96,0.08)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container3 />
      <DividerHorizontal3 />
    </div>
  );
}

function ListItemText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        List item
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`8 of 12 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <ListItemText4 />
        </div>
      </div>
    </div>
  );
}

function MinHeight4() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal4() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight4 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="bg-[rgba(59,73,96,0.08)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container4 />
      <DividerHorizontal4 />
    </div>
  );
}

function ListItemText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        List item
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`1 of 8 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <ListItemText5 />
        </div>
      </div>
    </div>
  );
}

function MinHeight5() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal5() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight5 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #2">
      <Container5 />
      <DividerHorizontal5 />
    </div>
  );
}

function ListItemText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        List item
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`1 of 10 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <ListItemText6 />
        </div>
      </div>
    </div>
  );
}

function MinHeight6() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal6() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight6 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #3">
      <Container6 />
      <DividerHorizontal6 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="<List>">
      <Item7 />
      <Item />
      <Item1 />
    </div>
  );
}

function Paper1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="<Paper>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <List1 />
        <Item4 />
        <Item4 />
        <Item5 />
        <Item4 />
        <Item6 />
        <List2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(59,73,96,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DrawerLeft1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1024px] items-start left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[340px]" data-name="<Drawer-Left>">
      <Paper1 />
    </div>
  );
}

function Dot6() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerDrawerLeft1() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-194px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: <Drawer-Left>">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot6 />
    </div>
  );
}

function Dot7() {
  return (
    <div className="absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0 translate-x-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerPaper1() {
  return (
    <div className="absolute h-[48px] left-1/2 overflow-clip top-[calc(50%-468.5px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Marker: <Paper>">
      <div className="absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-px" data-name="Rectangle" />
      <Dot7 />
    </div>
  );
}

function Dot8() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerItem1() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-194px)] overflow-clip top-[calc(50%-408px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Item #1">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot8 />
    </div>
  );
}

function Artwork1() {
  return (
    <div className="bg-[#f2f2f2] h-[1089px] min-w-[580px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <DrawerLeft1 />
      <div className="absolute bg-[#bbdefb] h-[24px] left-[120px] top-[33px] w-[340px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[120px] top-[33px] w-[25.707px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[436px] top-[33px] w-[25.707px]" />
      <MarkerDrawerLeft1 />
      <MarkerPaper1 />
      <MarkerItem1 />
    </div>
  );
}

function TypeIcon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon3 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Drawer-Left>`}</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">100% of container</p>
      </div>
    </div>
  );
}

function Attribute15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Height:</p>
      </div>
      <Component15 />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">340</p>
      </div>
    </div>
  );
}

function Attribute16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Width:</p>
      </div>
      <Component16 />
    </div>
  );
}

function Attributes3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute15 />
      <Attribute16 />
    </div>
  );
}

function Dot9() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function AnatomyItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element3 />
      <Attributes3 />
      <Dot9 />
    </div>
  );
}

function TypeIcon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element4() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon4 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Paper>`}</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#FFFFFF</p>
      </div>
    </div>
  );
}

function Attribute17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Background color:</p>
      </div>
      <Component17 />
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#3B4960, 12%</p>
      </div>
    </div>
  );
}

function Attribute18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border color:</p>
      </div>
      <Component18 />
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border weight:</p>
      </div>
      <Component19 />
    </div>
  );
}

function Attributes4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute17 />
      <Attribute18 />
      <Attribute19 />
    </div>
  );
}

function Dot10() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function AnatomyItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element4 />
      <Attributes4 />
      <Dot10 />
    </div>
  );
}

function TypeIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element5() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon5 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Item #1</p>
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<ListItem>`}</p>
      </div>
    </div>
  );
}

function Attribute20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Depends on:</p>
      </div>
      <Component20 />
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot?:</p>
      </div>
      <Component21 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot?:</p>
      </div>
      <Component22 />
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot:</p>
      </div>
      <Component23 />
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot:</p>
      </div>
      <Component24 />
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Divider:</p>
      </div>
      <Component25 />
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Second. Text:</p>
      </div>
      <Component26 />
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dense:</p>
      </div>
      <Component27 />
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dis. Gutters:</p>
      </div>
      <Component28 />
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">Enabled</p>
      </div>
    </div>
  );
}

function Attribute29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">State:</p>
      </div>
      <Component29 />
    </div>
  );
}

function Attributes5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute20 />
      <Attribute21 />
      <Attribute22 />
      <Attribute23 />
      <Attribute24 />
      <Attribute25 />
      <Attribute26 />
      <Attribute27 />
      <Attribute28 />
      <Attribute29 />
    </div>
  );
}

function Dot11() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function AnatomyItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element5 />
      <Attributes5 />
      <Dot11 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <AnatomyItem3 />
      <AnatomyItem4 />
      <AnatomyItem5 />
    </div>
  );
}

function Exhibit1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Artwork1 />
      <Content1 />
    </div>
  );
}

function Anatomy1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black">Accordion</p>
          <Exhibit1 />
        </div>
      </div>
    </div>
  );
}

function ListItemText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#3b4960] text-[20px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
    </div>
  );
}

function KeyboardDoubleArrowLeftOutlined2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KeyboardDoubleArrowLeftOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KeyboardDoubleArrowLeftOutlined">
          <g id="Vector">
            <path d={svgPaths.p1bef580} fill="var(--fill-0, #3B4960)" />
            <path d={svgPaths.p3cd92400} fill="var(--fill-0, #3B4960)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <KeyboardDoubleArrowLeftOutlined2 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText7 />
          <IconButton4 />
        </div>
      </div>
    </div>
  );
}

function MinHeight7() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal7() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight7 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container7 />
      <DividerHorizontal7 />
    </div>
  );
}

function Ring() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Ring">
      <div className="absolute inset-[-6.25%_-6.25%_-6.25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <g id="Ring">
            <path d={svgPaths.p36f5f080} id="Background" opacity="0" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3ed29a80} id="Line" stroke="var(--stroke-0, #3B4960)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MinWidth() {
  return <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="min-width" />;
}

function ProgressCircular() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="<Progress> | Circular">
      <Ring />
      <MinWidth />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ProgressCircular />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[32px] relative shrink-0" data-name="Left Content">
      <Icon5 />
    </div>
  );
}

function ListItemText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.5] relative shrink-0 text-[#3b4960] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personal information
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`10/30 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function ExpandMoreOutlined1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandMoreOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandMoreOutlined">
          <path d={svgPaths.p3f91a100} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandMoreOutlined1 />
    </div>
  );
}

function IconButton5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <LeftContent />
          <ListItemText8 />
          <IconButton5 />
        </div>
      </div>
    </div>
  );
}

function MinHeight8() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal8() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight8 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container8 />
      <DividerHorizontal8 />
    </div>
  );
}

function CheckCircleOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CheckCircleOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CheckCircleOutlined">
          <path d={svgPaths.p2de1ad00} fill="var(--fill-0, #0A875A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <CheckCircleOutlined />
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[32px] relative shrink-0" data-name="Left Content">
      <Icon7 />
    </div>
  );
}

function ListItemText9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.5] relative shrink-0 text-[#3b4960] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personal information
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`30 of 30 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function ExpandLessOutlined1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandLessOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandLessOutlined">
          <path d={svgPaths.p19f173c0} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandLessOutlined1 />
    </div>
  );
}

function IconButton6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <LeftContent1 />
          <ListItemText9 />
          <IconButton6 />
        </div>
      </div>
    </div>
  );
}

function MinHeight9() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal9() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight9 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container9 />
      <DividerHorizontal9 />
    </div>
  );
}

function Icon9() {
  return <div className="content-stretch flex items-start shrink-0" data-name="<Icon>" />;
}

function LeftContent2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[32px] relative shrink-0" data-name="Left Content">
      <Icon9 />
    </div>
  );
}

function ListItemText10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        List item
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`8 of 12 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <LeftContent2 />
          <ListItemText10 />
        </div>
      </div>
    </div>
  );
}

function MinHeight10() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal10() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight10 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container10 />
      <DividerHorizontal10 />
    </div>
  );
}

function Icon10() {
  return <div className="content-stretch flex items-start shrink-0" data-name="<Icon>" />;
}

function LeftContent3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[32px] relative shrink-0" data-name="Left Content">
      <Icon10 />
    </div>
  );
}

function ListItemText11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        List item
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`1 of 8 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <LeftContent3 />
          <ListItemText11 />
        </div>
      </div>
    </div>
  );
}

function MinHeight11() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal11() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight11 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #2">
      <Container11 />
      <DividerHorizontal11 />
    </div>
  );
}

function Icon11() {
  return <div className="content-stretch flex items-start shrink-0" data-name="<Icon>" />;
}

function LeftContent4() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[32px] relative shrink-0" data-name="Left Content">
      <Icon11 />
    </div>
  );
}

function ListItemText12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        List item
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`1 of 10 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <LeftContent4 />
          <ListItemText12 />
        </div>
      </div>
    </div>
  );
}

function MinHeight12() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal12() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight12 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #3">
      <Container12 />
      <DividerHorizontal12 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="<List>">
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function Item14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item #1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-[16px] relative w-full">
          <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[#1f2d44] text-[14px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Subheader
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorOutlineOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ErrorOutlineOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ErrorOutlineOutlined">
          <path d={svgPaths.p13fe9d80} fill="var(--fill-0, #C31D2B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ErrorOutlineOutlined />
    </div>
  );
}

function LeftContent5() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[32px] relative shrink-0" data-name="Left Content">
      <Icon12 />
    </div>
  );
}

function ListItemText13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.5] relative shrink-0 text-[#3b4960] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personal information
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`10 of 30 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function ExpandMoreOutlined2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandMoreOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandMoreOutlined">
          <path d={svgPaths.p3f91a100} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandMoreOutlined2 />
    </div>
  );
}

function IconButton7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon13 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <LeftContent5 />
          <ListItemText13 />
          <IconButton7 />
        </div>
      </div>
    </div>
  );
}

function MinHeight13() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal13() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight13 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container13 />
      <DividerHorizontal13 />
    </div>
  );
}

function Ring1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Ring">
      <div className="absolute inset-[-6.25%_-6.25%_-6.25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <g id="Ring">
            <path d={svgPaths.p36f5f080} id="Background" opacity="0" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3ed29a80} id="Line" stroke="var(--stroke-0, #3B4960)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MinWidth1() {
  return <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="min-width" />;
}

function ProgressCircular1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="<Progress> | Circular">
      <Ring1 />
      <MinWidth1 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ProgressCircular1 />
    </div>
  );
}

function LeftContent6() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[32px] relative shrink-0" data-name="Left Content">
      <Icon14 />
    </div>
  );
}

function ListItemText14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn leading-[1.5] relative shrink-0 text-[#3b4960] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personal information
      </p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43]">{`10 of 30 `}</span>
        <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
          completed
        </span>
      </p>
    </div>
  );
}

function ExpandLessOutlined2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandLessOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandLessOutlined">
          <path d={svgPaths.p19f173c0} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandLessOutlined2 />
    </div>
  );
}

function IconButton8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <LeftContent6 />
          <ListItemText14 />
          <IconButton8 />
        </div>
      </div>
    </div>
  );
}

function MinHeight14() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal14() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight14 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item16() {
  return (
    <div className="bg-[rgba(59,73,96,0.08)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container14 />
      <DividerHorizontal14 />
    </div>
  );
}

function ListItemText15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="ListItem Text">
      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start pl-[32px] py-[4px] relative text-[14px] tracking-[0.17px] w-full">
        <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          List item
        </p>
        <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[1.43]">{`8 of 12 `}</span>
          <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
            completed
          </span>
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <ListItemText15 />
        </div>
      </div>
    </div>
  );
}

function MinHeight15() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal15() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight15 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="bg-[rgba(59,73,96,0.08)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container15 />
      <DividerHorizontal15 />
    </div>
  );
}

function ListItemText16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="ListItem Text">
      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start pl-[32px] py-[4px] relative text-[14px] tracking-[0.17px] w-full">
        <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          List item
        </p>
        <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[1.43]">{`1 of 8 `}</span>
          <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
            completed
          </span>
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <ListItemText16 />
        </div>
      </div>
    </div>
  );
}

function MinHeight16() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal16() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight16 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #2">
      <Container16 />
      <DividerHorizontal16 />
    </div>
  );
}

function ListItemText17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="ListItem Text">
      <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start pl-[32px] py-[4px] relative text-[14px] tracking-[0.17px] w-full">
        <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#3b4960] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          List item
        </p>
        <p className="css-4hzbpn leading-[0] relative shrink-0 text-[#1f2d44] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[1.43]">{`1 of 10 `}</span>
          <span className="leading-[1.43]" style={{ fontVariationSettings: "'wdth' 100" }}>
            completed
          </span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[4px] relative w-full">
          <ListItemText17 />
        </div>
      </div>
    </div>
  );
}

function MinHeight17() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal17() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight17 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #3">
      <Container17 />
      <DividerHorizontal17 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="<List>">
      <Item17 />
      <Item18 />
      <Item19 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="<List>">
      <Item8 />
      <Item9 />
      <Item10 />
      <List3 />
      <Item14 />
      <Item15 />
      <Item16 />
      <List4 />
    </div>
  );
}

function Paper2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="<Paper>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <List5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(59,73,96,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DrawerLeft2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1024px] items-start left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[340px]" data-name="<Drawer-Left>">
      <Paper2 />
    </div>
  );
}

function Dot12() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerDrawerLeft2() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-194px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: <Drawer-Left>">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot12 />
    </div>
  );
}

function Dot13() {
  return (
    <div className="absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0 translate-x-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerPaper2() {
  return (
    <div className="absolute h-[48px] left-1/2 overflow-clip top-[calc(50%-468.5px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Marker: <Paper>">
      <div className="absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-px" data-name="Rectangle" />
      <Dot13 />
    </div>
  );
}

function Dot14() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerItem2() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-194px)] overflow-clip top-[calc(50%-408px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Item #1">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot14 />
    </div>
  );
}

function Artwork2() {
  return (
    <div className="bg-[#f2f2f2] h-[1089px] min-w-[580px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <DrawerLeft2 />
      <div className="absolute bg-[#bbdefb] h-[24px] left-[120px] top-[33px] w-[340px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[120px] top-[31px] w-[25.707px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[436px] top-[31px] w-[25.707px]" />
      <MarkerDrawerLeft2 />
      <MarkerPaper2 />
      <MarkerItem2 />
    </div>
  );
}

function TypeIcon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element6() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon6 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Drawer-Left>`}</p>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">100% of container</p>
      </div>
    </div>
  );
}

function Attribute30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Height:</p>
      </div>
      <Component30 />
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">340</p>
      </div>
    </div>
  );
}

function Attribute31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Width:</p>
      </div>
      <Component31 />
    </div>
  );
}

function Attributes6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute30 />
      <Attribute31 />
    </div>
  );
}

function Dot15() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function AnatomyItem6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element6 />
      <Attributes6 />
      <Dot15 />
    </div>
  );
}

function TypeIcon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element7() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon7 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Paper>`}</p>
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#FFFFFF</p>
      </div>
    </div>
  );
}

function Attribute32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Background color:</p>
      </div>
      <Component32 />
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#3B4960, 12%</p>
      </div>
    </div>
  );
}

function Attribute33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border color:</p>
      </div>
      <Component33 />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border weight:</p>
      </div>
      <Component34 />
    </div>
  );
}

function Attributes7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute32 />
      <Attribute33 />
      <Attribute34 />
    </div>
  );
}

function Dot16() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function AnatomyItem7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element7 />
      <Attributes7 />
      <Dot16 />
    </div>
  );
}

function TypeIcon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element8() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon8 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Item #1</p>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<ListItem>`}</p>
      </div>
    </div>
  );
}

function Attribute35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Depends on:</p>
      </div>
      <Component35 />
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot?:</p>
      </div>
      <Component36 />
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot?:</p>
      </div>
      <Component37 />
    </div>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot:</p>
      </div>
      <Component38 />
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot:</p>
      </div>
      <Component39 />
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Divider:</p>
      </div>
      <Component40 />
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Second. Text:</p>
      </div>
      <Component41 />
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dense:</p>
      </div>
      <Component42 />
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dis. Gutters:</p>
      </div>
      <Component43 />
    </div>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">Enabled</p>
      </div>
    </div>
  );
}

function Attribute44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">State:</p>
      </div>
      <Component44 />
    </div>
  );
}

function Attributes8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute35 />
      <Attribute36 />
      <Attribute37 />
      <Attribute38 />
      <Attribute39 />
      <Attribute40 />
      <Attribute41 />
      <Attribute42 />
      <Attribute43 />
      <Attribute44 />
    </div>
  );
}

function Dot17() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function AnatomyItem8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element8 />
      <Attributes8 />
      <Dot17 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <AnatomyItem6 />
      <AnatomyItem7 />
      <AnatomyItem8 />
    </div>
  );
}

function Exhibit2() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Artwork2 />
      <Content2 />
    </div>
  );
}

function Anatomy2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black">Accordion</p>
          <Exhibit2 />
        </div>
      </div>
    </div>
  );
}

function Specification() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start min-w-[580px] relative shrink-0" data-name="Specification">
      <Name />
      <Anatomy />
      <Anatomy1 />
      <Anatomy2 />
    </div>
  );
}

function Name1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[64px] text-black">{`<Drawer - Right>`}</p>
        </div>
      </div>
    </div>
  );
}

function ListItemText18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#3b4960] text-[20px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
    </div>
  );
}

function CloseOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CloseOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CloseOutlined">
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <CloseOutlined />
    </div>
  );
}

function IconButton9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText18 />
          <IconButton9 />
        </div>
      </div>
    </div>
  );
}

function MinHeight18() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal18() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight18 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="460" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container18 />
      <DividerHorizontal18 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="<List>">
      <Item20 />
    </div>
  );
}

function Paper3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="<Paper>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <List6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(59,73,96,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DrawerRight() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1024px] items-start left-1/2 shadow-[0px_6px_30px_5px_rgba(0,0,0,0.12),0px_16px_24px_2px_rgba(0,0,0,0.14),0px_8px_10px_-5px_rgba(0,0,0,0.2)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[460px]" data-name="<Drawer - Right>">
      <Paper3 />
    </div>
  );
}

function Dot18() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerDrawerRight() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-254px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Drawer - Right">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot18 />
    </div>
  );
}

function Dot19() {
  return (
    <div className="absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0 translate-x-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerPaper3() {
  return (
    <div className="absolute h-[48px] left-1/2 overflow-clip top-[calc(50%-468.5px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Marker: <Paper>">
      <div className="absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-px" data-name="Rectangle" />
      <Dot19 />
    </div>
  );
}

function Dot20() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerList() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-254px)] overflow-clip top-[calc(50%-408.5px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: <List>">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot20 />
    </div>
  );
}

function Dot21() {
  return (
    <div className="absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">4</p>
      </div>
    </div>
  );
}

function MarkerItem3() {
  return (
    <div className="absolute h-[24px] left-[calc(50%+254px)] overflow-clip top-[calc(50%-408px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Item #1">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot21 />
    </div>
  );
}

function Artwork3() {
  return (
    <div className="bg-[#f2f2f2] h-[1089px] min-w-[700px] overflow-clip relative shrink-0 w-[700px]" data-name="Artwork">
      <DrawerRight />
      <div className="absolute bg-[#bbdefb] h-[24px] left-[120px] top-[33px] w-[460px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[120px] top-[33px] w-[25.707px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[556px] top-[33px] w-[25.707px]" />
      <MarkerDrawerRight />
      <MarkerPaper3 />
      <MarkerList />
      <MarkerItem3 />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[98px] w-[460px]" />
    </div>
  );
}

function TypeIcon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element9() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon9 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Drawer - Right</p>
    </div>
  );
}

function Component45() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">889</p>
      </div>
    </div>
  );
}

function Attribute45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Height:</p>
      </div>
      <Component45 />
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">460</p>
      </div>
    </div>
  );
}

function Attribute46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Width:</p>
      </div>
      <Component46 />
    </div>
  );
}

function Attributes9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute45 />
      <Attribute46 />
    </div>
  );
}

function Dot22() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function AnatomyItem9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element9 />
      <Attributes9 />
      <Dot22 />
    </div>
  );
}

function TypeIcon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element10() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon10 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Paper>`}</p>
    </div>
  );
}

function Component47() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#FFFFFF</p>
      </div>
    </div>
  );
}

function Attribute47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Background color:</p>
      </div>
      <Component47 />
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#3B4960, 12%</p>
      </div>
    </div>
  );
}

function Attribute48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border color:</p>
      </div>
      <Component48 />
    </div>
  );
}

function Component49() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border weight:</p>
      </div>
      <Component49 />
    </div>
  );
}

function Attributes10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute47 />
      <Attribute48 />
      <Attribute49 />
    </div>
  );
}

function Dot23() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function AnatomyItem10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element10 />
      <Attributes10 />
      <Dot23 />
    </div>
  );
}

function TypeIcon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element11() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon11 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<List>`}</p>
    </div>
  );
}

function Dot24() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function AnatomyItem11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element11 />
      <Dot24 />
    </div>
  );
}

function TypeIcon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element12() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon12 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Item #1</p>
    </div>
  );
}

function Component50() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<ListItem>`}</p>
      </div>
    </div>
  );
}

function Attribute50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Depends on:</p>
      </div>
      <Component50 />
    </div>
  );
}

function Component51() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot?:</p>
      </div>
      <Component51 />
    </div>
  );
}

function Component52() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot?:</p>
      </div>
      <Component52 />
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot:</p>
      </div>
      <Component53 />
    </div>
  );
}

function Component54() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot:</p>
      </div>
      <Component54 />
    </div>
  );
}

function Component55() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute55() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Divider:</p>
      </div>
      <Component55 />
    </div>
  );
}

function Component56() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Second. Text:</p>
      </div>
      <Component56 />
    </div>
  );
}

function Component57() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute57() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dense:</p>
      </div>
      <Component57 />
    </div>
  );
}

function Component58() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dis. Gutters:</p>
      </div>
      <Component58 />
    </div>
  );
}

function Component59() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">Enabled</p>
      </div>
    </div>
  );
}

function Attribute59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">State:</p>
      </div>
      <Component59 />
    </div>
  );
}

function Attributes11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute50 />
      <Attribute51 />
      <Attribute52 />
      <Attribute53 />
      <Attribute54 />
      <Attribute55 />
      <Attribute56 />
      <Attribute57 />
      <Attribute58 />
      <Attribute59 />
    </div>
  );
}

function Dot25() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">4</p>
      </div>
    </div>
  );
}

function AnatomyItem12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element12 />
      <Attributes11 />
      <Dot25 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <AnatomyItem9 />
      <AnatomyItem10 />
      <AnatomyItem11 />
      <AnatomyItem12 />
    </div>
  );
}

function Exhibit3() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Artwork3 />
      <Content3 />
    </div>
  );
}

function Anatomy3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black">Basic</p>
          <Exhibit3 />
        </div>
      </div>
    </div>
  );
}

function ListItemText19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#3b4960] text-[20px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
    </div>
  );
}

function CloseOutlined1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CloseOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CloseOutlined">
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <CloseOutlined1 />
    </div>
  );
}

function IconButton10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText19 />
          <IconButton10 />
        </div>
      </div>
    </div>
  );
}

function MinHeight19() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal19() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight19 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="460" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container19 />
      <DividerHorizontal19 />
    </div>
  );
}

function List7() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[594.581px] items-start ml-0 mt-0 py-[8px] relative row-1 w-[460px]" data-name="<List>">
      <Item21 />
    </div>
  );
}

function DividerHorizontal20() {
  return (
    <div className="h-px relative shrink-0 w-[460px]" data-name="<Divider> | Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460 1">
        <g id="<Divider> | Horizontal">
          <g id="min-height"></g>
          <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="460" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="css-ew64yg font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#3b4960] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f1f2f3] content-stretch flex flex-col items-start justify-center overflow-clip px-[24px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base />
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="css-ew64yg font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[14px] text-white tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3b4960] content-stretch flex flex-col items-end justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base1 />
    </div>
  );
}

function CardActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="<CardActions>">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function CardElements() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Card Elements">
      <DividerHorizontal20 />
      <CardActions />
    </div>
  );
}

function Paper4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="<Paper>">
      <CardElements />
    </div>
  );
}

function DrawerActions() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[429.419px] items-center justify-end ml-0 mt-[594.58px] relative rounded-[4px] row-1 w-[460px]" data-name="<Drawer-Actions>">
      <Paper4 />
    </div>
  );
}

function Group() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative">
      <List7 />
      <DrawerActions />
    </div>
  );
}

function Paper5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="<Paper>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(59,73,96,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DrawerRight1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1024px] items-start left-1/2 shadow-[0px_6px_30px_5px_rgba(0,0,0,0.12),0px_16px_24px_2px_rgba(0,0,0,0.14),0px_8px_10px_-5px_rgba(0,0,0,0.2)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[460px]" data-name="<Drawer - Right>">
      <Paper5 />
    </div>
  );
}

function Dot26() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerDrawerRight1() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-254px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Drawer - Right">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot26 />
    </div>
  );
}

function Dot27() {
  return (
    <div className="absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0 translate-x-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerPaper4() {
  return (
    <div className="absolute h-[48px] left-1/2 overflow-clip top-[calc(50%-468.5px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Marker: <Paper>">
      <div className="absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-px" data-name="Rectangle" />
      <Dot27 />
    </div>
  );
}

function Dot28() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerList1() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-254px)] overflow-clip top-[calc(50%-408.5px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: <List>">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot28 />
    </div>
  );
}

function Dot29() {
  return (
    <div className="absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">4</p>
      </div>
    </div>
  );
}

function MarkerItem4() {
  return (
    <div className="absolute h-[24px] left-[calc(50%+254px)] overflow-clip top-[calc(50%-408px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Item #1">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot29 />
    </div>
  );
}

function Artwork4() {
  return (
    <div className="bg-[#f2f2f2] h-[1089px] min-w-[700px] overflow-clip relative shrink-0 w-[700px]" data-name="Artwork">
      <DrawerRight1 />
      <div className="absolute bg-[#bbdefb] h-[24px] left-[120px] top-[33px] w-[460px]" data-name="Title" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[120px] top-[33px] w-[24px]" data-name="Marker" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[556px] top-[33px] w-[24px]" data-name="Marker" />
      <MarkerDrawerRight1 />
      <MarkerPaper4 />
      <MarkerList1 />
      <MarkerItem4 />
      <p className="absolute css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] left-[352px] text-[#e53935] text-[20px] text-center top-[927px] tracking-[0.15px] translate-x-[-50%] w-[398px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Action Bar is fixed to the bottom. Content will scroll below it.
      </p>
      <div className="absolute bg-[#c8e6c9] h-[8px] left-[120px] top-[1048px] w-[460px]" data-name="Divider" />
      <div className="absolute bg-[#c8e6c9] h-[8px] left-[120px] top-[1004px] w-[460px]" data-name="Bottom border" />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[98px] w-[460px]" data-name="Top border" />
    </div>
  );
}

function TypeIcon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element13() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon13 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Drawer - Right</p>
    </div>
  );
}

function Component60() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">889</p>
      </div>
    </div>
  );
}

function Attribute60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Height:</p>
      </div>
      <Component60 />
    </div>
  );
}

function Component61() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">460</p>
      </div>
    </div>
  );
}

function Attribute61() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Width:</p>
      </div>
      <Component61 />
    </div>
  );
}

function Attributes12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute60 />
      <Attribute61 />
    </div>
  );
}

function Dot30() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function AnatomyItem13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element13 />
      <Attributes12 />
      <Dot30 />
    </div>
  );
}

function TypeIcon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element14() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon14 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Paper>`}</p>
    </div>
  );
}

function Component62() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#FFFFFF</p>
      </div>
    </div>
  );
}

function Attribute62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Background color:</p>
      </div>
      <Component62 />
    </div>
  );
}

function Component63() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#3B4960, 12%</p>
      </div>
    </div>
  );
}

function Attribute63() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border color:</p>
      </div>
      <Component63 />
    </div>
  );
}

function Component64() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute64() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border weight:</p>
      </div>
      <Component64 />
    </div>
  );
}

function Attributes13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute62 />
      <Attribute63 />
      <Attribute64 />
    </div>
  );
}

function Dot31() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function AnatomyItem14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element14 />
      <Attributes13 />
      <Dot31 />
    </div>
  );
}

function TypeIcon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element15() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon15 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<List>`}</p>
    </div>
  );
}

function Dot32() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function AnatomyItem15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element15 />
      <Dot32 />
    </div>
  );
}

function TypeIcon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element16() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon16 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Item #1</p>
    </div>
  );
}

function Component65() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<ListItem>`}</p>
      </div>
    </div>
  );
}

function Attribute65() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Depends on:</p>
      </div>
      <Component65 />
    </div>
  );
}

function Component66() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute66() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot?:</p>
      </div>
      <Component66 />
    </div>
  );
}

function Component67() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute67() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot?:</p>
      </div>
      <Component67 />
    </div>
  );
}

function Component68() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute68() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot:</p>
      </div>
      <Component68 />
    </div>
  );
}

function Component69() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute69() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot:</p>
      </div>
      <Component69 />
    </div>
  );
}

function Component70() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute70() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Divider:</p>
      </div>
      <Component70 />
    </div>
  );
}

function Component71() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute71() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Second. Text:</p>
      </div>
      <Component71 />
    </div>
  );
}

function Component72() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute72() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dense:</p>
      </div>
      <Component72 />
    </div>
  );
}

function Component73() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute73() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dis. Gutters:</p>
      </div>
      <Component73 />
    </div>
  );
}

function Component74() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">Enabled</p>
      </div>
    </div>
  );
}

function Attribute74() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">State:</p>
      </div>
      <Component74 />
    </div>
  );
}

function Attributes14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute65 />
      <Attribute66 />
      <Attribute67 />
      <Attribute68 />
      <Attribute69 />
      <Attribute70 />
      <Attribute71 />
      <Attribute72 />
      <Attribute73 />
      <Attribute74 />
    </div>
  );
}

function Dot33() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">4</p>
      </div>
    </div>
  );
}

function AnatomyItem16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element16 />
      <Attributes14 />
      <Dot33 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <AnatomyItem13 />
      <AnatomyItem14 />
      <AnatomyItem15 />
      <AnatomyItem16 />
    </div>
  );
}

function Exhibit4() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Artwork4 />
      <Content4 />
    </div>
  );
}

function Anatomy4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black">Action Bar</p>
          <Exhibit4 />
        </div>
      </div>
    </div>
  );
}

function ListItemText20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#3b4960] text-[20px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
    </div>
  );
}

function CloseOutlined2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CloseOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CloseOutlined">
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <CloseOutlined2 />
    </div>
  );
}

function IconButton11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[8px] relative w-full">
          <ListItemText20 />
          <IconButton11 />
        </div>
      </div>
    </div>
  );
}

function MinHeight20() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function DividerHorizontal21() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
      <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "627" } as React.CSSProperties}>
        <div className="flex-none scale-x-[0%] scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
          <MinHeight20 />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460 1">
            <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="460" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #1">
      <Container20 />
      <DividerHorizontal21 />
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start py-[8px] relative shrink-0 w-full" data-name="<List>">
      <Item22 />
    </div>
  );
}

function ArrowDropDownOutlined() {
  return (
    <div className="absolute right-0 size-[24px] top-[calc(50%-8px)] translate-y-[-50%]" data-name="ArrowDropDownOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowDropDownOutlined">
          <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#3b4960] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">{`Inputs can be as wide as necessary. `}</p>
      </div>
      <ArrowDropDownOutlined />
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-col gap-[3px] items-start pb-[8px] pt-[9px] px-[12px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2d44] text-[12px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="css-ew64yg leading-[12px]">Label</p>
        </div>
        <Content5 />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-[rgba(59,73,96,0.06)] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Content">
      <Input />
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Default">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428 1">
            <line id="Default" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.42" x2="428" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[428px]" data-name="<Select>">
      <Content6 />
    </div>
  );
}

function ArrowDropDownOutlined1() {
  return (
    <div className="absolute right-0 size-[24px] top-[calc(50%-8px)] translate-y-[-50%]" data-name="ArrowDropDownOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowDropDownOutlined">
          <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] min-w-[24px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#3b4960] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">Value</p>
      </div>
      <ArrowDropDownOutlined1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-col gap-[3px] items-start pb-[8px] pt-[9px] px-[12px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2d44] text-[12px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="css-ew64yg leading-[12px]">Label</p>
        </div>
        <Content7 />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-[rgba(59,73,96,0.06)] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Content">
      <Input1 />
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Default">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 1">
            <line id="Default" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.42" x2="220" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]" data-name="<Select>">
      <Content8 />
    </div>
  );
}

function MinHeight21() {
  return <div className="h-[24px] shrink-0 w-0" data-name="min-height" />;
}

function MinWidth2() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Content9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <MinHeight21 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#3b4960] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Value
      </p>
      <MinWidth2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-col gap-[3px] items-start pb-[8px] pt-[9px] px-[12px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2d44] text-[12px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="css-ew64yg leading-[12px]">Label</p>
        </div>
        <Content9 />
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-[rgba(59,73,96,0.06)] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Content">
      <Input2 />
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Underline">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(59, 73, 96, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 1">
            <line id="Default" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.42" x2="220" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]" data-name="<TextField>">
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[288px]" data-name="Content">
      <p className="css-4hzbpn font-['Open_Sans:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#3b4960] text-[12px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0 w-[366px]" data-name="<CardHeader>">
      <Content11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(59,73,96,0.12)] content-stretch flex items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
      <CardHeader />
    </div>
  );
}

function DividerHorizontal22() {
  return (
    <div className="h-px relative shrink-0 w-[366px]" data-name="<Divider> | Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 366 1">
        <g id="<Divider> | Horizontal">
          <g id="min-height"></g>
          <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="366" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function FormatBoldOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FormatBoldOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FormatBoldOutlined">
          <path d={svgPaths.p23a7bff0} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <FormatBoldOutlined />
    </div>
  );
}

function ToggleButton() {
  return (
    <div className="bg-[rgba(59,73,96,0.08)] content-stretch flex items-center p-[8px] relative shrink-0" data-name="<ToggleButton>">
      <div aria-hidden="true" className="absolute border-[rgba(59,73,96,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <Icon19 />
    </div>
  );
}

function FormatItalicOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FormatItalicOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FormatItalicOutlined">
          <path d={svgPaths.p2de38400} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <FormatItalicOutlined />
    </div>
  );
}

function ToggleButton1() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="<ToggleButton>">
      <div aria-hidden="true" className="absolute border-[rgba(59,73,96,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <Icon20 />
    </div>
  );
}

function FormatUnderlinedOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FormatUnderlinedOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FormatUnderlinedOutlined">
          <path d={svgPaths.p93570f0} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <FormatUnderlinedOutlined />
    </div>
  );
}

function ToggleButton2() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="<ToggleButton>">
      <div aria-hidden="true" className="absolute border-[rgba(59,73,96,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <Icon21 />
    </div>
  );
}

function StrikethroughSOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="StrikethroughSOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="StrikethroughSOutlined">
          <path d={svgPaths.p394447c0} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <StrikethroughSOutlined />
    </div>
  );
}

function ToggleButton3() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="<ToggleButton>">
      <div aria-hidden="true" className="absolute border-[rgba(59,73,96,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <Icon22 />
    </div>
  );
}

function FormatListBulletedOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FormatListBulletedOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FormatListBulletedOutlined">
          <path d={svgPaths.p3b953840} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <FormatListBulletedOutlined />
    </div>
  );
}

function ToggleButton4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="<ToggleButton>">
      <div aria-hidden="true" className="absolute border-[rgba(59,73,96,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <Icon23 />
    </div>
  );
}

function FormatListNumberedOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FormatListNumberedOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FormatListNumberedOutlined">
          <path d={svgPaths.p28a8b100} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <FormatListNumberedOutlined />
    </div>
  );
}

function ToggleButton5() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="<ToggleButton>">
      <div aria-hidden="true" className="absolute border-[rgba(59,73,96,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <Icon24 />
    </div>
  );
}

function ToggleButtonGroup() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[366px]" data-name="<ToggleButtonGroup>">
      <ToggleButton />
      <ToggleButton1 />
      <ToggleButton2 />
      <ToggleButton3 />
      <ToggleButton4 />
      <ToggleButton5 />
    </div>
  );
}

function Actions() {
  return (
    <div className="bg-[rgba(59,73,96,0.06)] content-stretch flex items-start relative shrink-0 w-[366px]" data-name="Actions">
      <ToggleButtonGroup />
    </div>
  );
}

function Input3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2d44] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="css-4hzbpn leading-[1.5]">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
        </div>
      </div>
    </div>
  );
}

function DividerHorizontal23() {
  return (
    <div className="h-px relative shrink-0 w-[366px]" data-name="<Divider> | Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 366 1">
        <g id="<Divider> | Horizontal">
          <g id="min-height"></g>
          <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.5" x2="366" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function CustomTextEditor() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Custom / Text Editor">
      <DividerHorizontal22 />
      <Actions />
      <DividerHorizontal22 />
      <Input3 />
      <DividerHorizontal23 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="bg-[rgba(59,73,96,0.06)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="<CardContent>">
      <CustomTextEditor />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#3b4960] text-[12px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {" "}
      </p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[354px]" data-name="<CardHeader>">
      <Content12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative w-full">
          <CardHeader1 />
        </div>
      </div>
    </div>
  );
}

function CardElements1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Card Elements">
      <Frame />
      <CardContent />
      <Frame1 />
    </div>
  );
}

function RichTextEditor() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-[366px]" data-name="<Rich Text Editor>">
      <CardElements1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Select />
        <Select1 />
        <p className="css-ew64yg font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[#3b4960] text-[14px] tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Subheader
        </p>
        <TextField />
        <RichTextEditor />
      </div>
    </div>
  );
}

function DividerHorizontal24() {
  return (
    <div className="h-px relative shrink-0 w-[460px]" data-name="<Divider> | Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460 1">
        <g id="<Divider> | Horizontal">
          <g id="min-height"></g>
          <line id="Divider" stroke="var(--stroke-0, #3B4960)" strokeOpacity="0.12" x2="460" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="css-ew64yg font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#3b4960] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f1f2f3] content-stretch flex flex-col items-start justify-center overflow-clip px-[24px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base2 />
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="css-ew64yg font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[14px] text-white tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#3b4960] content-stretch flex flex-col items-end justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base3 />
    </div>
  );
}

function CardActions1() {
  return (
    <div className="relative shrink-0 w-full" data-name="<CardActions>">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function CardElements2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Card Elements">
      <DividerHorizontal24 />
      <CardActions1 />
    </div>
  );
}

function Paper6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="<Paper>">
      <CardElements2 />
    </div>
  );
}

function DrawerActions1() {
  return (
    <div className="content-stretch flex flex-col items-center relative rounded-[4px] shrink-0 w-[460px]" data-name="<Drawer-Actions>">
      <Paper6 />
    </div>
  );
}

function Paper7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="<Paper>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <List8 />
        <Frame2 />
        <DrawerActions1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(59,73,96,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DrawerRight2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1024px] items-start left-1/2 shadow-[0px_6px_30px_5px_rgba(0,0,0,0.12),0px_16px_24px_2px_rgba(0,0,0,0.14),0px_8px_10px_-5px_rgba(0,0,0,0.2)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[460px]" data-name="<Drawer - Right>">
      <Paper7 />
    </div>
  );
}

function Dot34() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerDrawerRight2() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-254px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Drawer - Right">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot34 />
    </div>
  );
}

function Dot35() {
  return (
    <div className="absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0 translate-x-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerPaper5() {
  return (
    <div className="absolute h-[48px] left-1/2 overflow-clip top-[calc(50%-468.5px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Marker: <Paper>">
      <div className="absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-px" data-name="Rectangle" />
      <Dot35 />
    </div>
  );
}

function Dot36() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerList2() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-254px)] overflow-clip top-[calc(50%-408.5px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: <List>">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot36 />
    </div>
  );
}

function Dot37() {
  return (
    <div className="absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">4</p>
      </div>
    </div>
  );
}

function MarkerItem5() {
  return (
    <div className="absolute h-[24px] left-[calc(50%+254px)] overflow-clip top-[calc(50%-408px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="Marker: Item #1">
      <div className="absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Rectangle" />
      <Dot37 />
    </div>
  );
}

function Artwork5() {
  return (
    <div className="bg-[#f2f2f2] h-[1089px] min-w-[700px] overflow-clip relative shrink-0 w-[700px]" data-name="Artwork">
      <DrawerRight2 />
      <div className="absolute bg-[#bbdefb] h-[24px] left-[120px] top-[33px] w-[460px]" />
      <div className="absolute bg-[rgba(187,222,251,0.5)] h-[1024px] left-[120px] top-[33px] w-[24.023px]" />
      <div className="absolute bg-[#bbdefb] h-[1024px] left-[556px] top-[33px] w-[24.023px]" />
      <MarkerDrawerRight2 />
      <MarkerPaper5 />
      <MarkerList2 />
      <MarkerItem5 />
      <p className="absolute css-4hzbpn font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] left-[153px] text-[#e53935] text-[20px] top-[730px] tracking-[0.15px] w-[398px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        These inputs take the same rules as are applied to any form
      </p>
      <div className="absolute bg-[#c8e6c9] h-[8px] left-[120px] top-[1048px] w-[460px]" />
      <div className="absolute bg-[#c8e6c9] h-[8px] left-[120px] top-[1004px] w-[460px]" />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[169px] w-[460px]" />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[239px] w-[460px]" />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[311px] w-[460px]" />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[383px] w-[460px]" />
      <div className="absolute bg-[#f48fb1] h-[16px] left-[120px] top-[656px] w-[460px]" />
    </div>
  );
}

function TypeIcon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element17() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon17 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Drawer - Right</p>
    </div>
  );
}

function Component75() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">889</p>
      </div>
    </div>
  );
}

function Attribute75() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Height:</p>
      </div>
      <Component75 />
    </div>
  );
}

function Component76() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">460</p>
      </div>
    </div>
  );
}

function Attribute76() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Width:</p>
      </div>
      <Component76 />
    </div>
  );
}

function Attributes15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute75 />
      <Attribute76 />
    </div>
  );
}

function Dot38() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">1</p>
      </div>
    </div>
  );
}

function AnatomyItem17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element17 />
      <Attributes15 />
      <Dot38 />
    </div>
  );
}

function TypeIcon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element18() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon18 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<Paper>`}</p>
    </div>
  );
}

function Component77() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#FFFFFF</p>
      </div>
    </div>
  );
}

function Attribute77() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Background color:</p>
      </div>
      <Component77 />
    </div>
  );
}

function Component78() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">#3B4960, 12%</p>
      </div>
    </div>
  );
}

function Attribute78() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border color:</p>
      </div>
      <Component78 />
    </div>
  );
}

function Component79() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute79() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Border weight:</p>
      </div>
      <Component79 />
    </div>
  );
}

function Attributes16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute77 />
      <Attribute78 />
      <Attribute79 />
    </div>
  );
}

function Dot39() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">2</p>
      </div>
    </div>
  );
}

function AnatomyItem18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element18 />
      <Attributes16 />
      <Dot39 />
    </div>
  );
}

function TypeIcon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element19() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon19 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">{`<List>`}</p>
    </div>
  );
}

function Dot40() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">3</p>
      </div>
    </div>
  );
}

function AnatomyItem19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element19 />
      <Dot40 />
    </div>
  );
}

function TypeIcon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Type icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Type icon">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Element20() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0" data-name="Element">
      <TypeIcon20 />
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Item #1</p>
    </div>
  );
}

function Component80() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<ListItem>`}</p>
      </div>
    </div>
  );
}

function Attribute80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Depends on:</p>
      </div>
      <Component80 />
    </div>
  );
}

function Component81() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute81() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot?:</p>
      </div>
      <Component81 />
    </div>
  );
}

function Component82() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute82() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot?:</p>
      </div>
      <Component82 />
    </div>
  );
}

function Component83() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute83() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Right Slot:</p>
      </div>
      <Component83 />
    </div>
  );
}

function Component84() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">{`<Instance name>`}</p>
      </div>
    </div>
  );
}

function Attribute84() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Left Slot:</p>
      </div>
      <Component84 />
    </div>
  );
}

function Component85() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute85() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Divider:</p>
      </div>
      <Component85 />
    </div>
  );
}

function Component86() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">false</p>
      </div>
    </div>
  );
}

function Attribute86() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Second. Text:</p>
      </div>
      <Component86 />
    </div>
  );
}

function Component87() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute87() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dense:</p>
      </div>
      <Component87 />
    </div>
  );
}

function Component88() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">False</p>
      </div>
    </div>
  );
}

function Attribute88() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">Dis. Gutters:</p>
      </div>
      <Component88 />
    </div>
  );
}

function Component89() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">Enabled</p>
      </div>
    </div>
  );
}

function Attribute89() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[normal]">State:</p>
      </div>
      <Component89 />
    </div>
  );
}

function Attributes17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Attributes">
      <Attribute80 />
      <Attribute81 />
      <Attribute82 />
      <Attribute83 />
      <Attribute84 />
      <Attribute85 />
      <Attribute86 />
      <Attribute87 />
      <Attribute88 />
      <Attribute89 />
    </div>
  );
}

function Dot41() {
  return (
    <div className="absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[20px] top-0" data-name="Dot">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[normal]">4</p>
      </div>
    </div>
  );
}

function AnatomyItem20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[28px] relative shrink-0" data-name="Anatomy item">
      <Element20 />
      <Attributes17 />
      <Dot41 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <AnatomyItem17 />
      <AnatomyItem18 />
      <AnatomyItem19 />
      <AnatomyItem20 />
    </div>
  );
}

function Exhibit5() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Artwork5 />
      <Content13 />
    </div>
  );
}

function Anatomy5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black">Anatomy</p>
          <Exhibit5 />
        </div>
      </div>
    </div>
  );
}

function Specification1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start min-w-[700px] relative shrink-0" data-name="Specification">
      <Name1 />
      <Anatomy3 />
      <Anatomy4 />
      <Anatomy5 />
    </div>
  );
}

export default function Specs() {
  return (
    <div className="content-stretch flex gap-[128px] items-start relative size-full" data-name="Specs">
      <Specification />
      <Specification1 />
    </div>
  );
}