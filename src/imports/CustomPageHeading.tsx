import svgPaths from "./svg-xi6g04nezv";

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
        <g id="Frame">
          <rect fill="var(--fill-0, #009688)" fillOpacity="0.12" height="12" id="spacer" width="24" />
          <path d="M0.5 0V12" id="Line" stroke="var(--stroke-0, #009688)" strokeDasharray="2" />
          <path d="M23.5 0V12" id="Line_2" stroke="var(--stroke-0, #009688)" strokeDasharray="2" />
        </g>
      </svg>
    </div>
  );
}

function SpacingHorizontal() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start opacity-0 relative shrink-0" data-name="Spacing | Horizontal">
      <Frame />
    </div>
  );
}

function MinHeight() {
  return <div className="h-[8px] shrink-0 w-px" data-name="min-height" />;
}

function SpacingVertical() {
  return (
    <div className="bg-[rgba(0,150,136,0.12)] content-stretch flex flex-col items-start opacity-0 relative shrink-0 w-[4px]" data-name="Spacing | Vertical">
      <div aria-hidden="true" className="absolute border-[#009688] border-b border-dashed border-t inset-[-0.5px_0] pointer-events-none" />
      <MinHeight />
    </div>
  );
}

function ArrowBackIosOutlined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ArrowBackIosOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowBackIosOutlined">
          <path d={svgPaths.pe39fc80} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ArrowBackIosOutlined />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[8px]" data-name="Frame">
      <div className="absolute bottom-0 left-1/2 top-0 translate-x-[-50%] w-[8px]" data-name="spacer" />
    </div>
  );
}

function SpacingHorizontal1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0" data-name="Spacing | Horizontal">
      <Frame1 />
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header text container">
      <Icon />
      <SpacingHorizontal1 />
      <div className="css-g0mm18 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b4960] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.334]">Long page header goes here for this section</p>
      </div>
    </div>
  );
}

function MinHeight1() {
  return <div className="h-[16px] shrink-0 w-px" data-name="min-height" />;
}

function SpacingVertical1() {
  return (
    <div className="bg-[rgba(0,150,136,0.12)] content-stretch flex flex-col items-start opacity-0 relative shrink-0 w-[8px]" data-name="Spacing | Vertical">
      <div aria-hidden="true" className="absolute border-[#009688] border-b border-dashed border-t inset-[-0.5px_0] pointer-events-none" />
      <MinHeight1 />
    </div>
  );
}

function ReportGmailerrorredOutlined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ReportGmailerrorredOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ReportGmailerrorredOutlined">
          <g id="Vector">
            <path d={svgPaths.p1ebd4d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p188ca400} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa9e5600} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#c31d2b] content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ReportGmailerrorredOutlined />
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-white tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Diabetes
      </p>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#c31d2b] content-stretch flex h-[24px] items-center overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Icon1 />
      <Typography />
    </div>
  );
}

function WarningAmberOutlined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="WarningAmberOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="WarningAmberOutlined">
          <path d={svgPaths.p4167900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#ef6c00] content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <WarningAmberOutlined />
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-white tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sulfa New
      </p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#ef6c00] content-stretch flex h-[24px] items-center overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Icon2 />
      <Typography1 />
    </div>
  );
}

function InfoOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="InfoOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="InfoOutlined">
          <rect fill="#FFDD00" height="24" width="24" />
          <path d={svgPaths.p2668ba00} fill="var(--fill-0, #0D1B30)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1f2d44] text-[13px] tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bees
      </p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#fd0] content-stretch flex h-[24px] items-center overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <InfoOutlined />
      <Typography2 />
    </div>
  );
}

function Typography3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-white tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unavailable
      </p>
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-[#c31d2b] content-stretch flex items-center overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Typography3 />
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-white tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +3
      </p>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[#c31d2b] content-stretch flex items-center overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Typography4 />
    </div>
  );
}

function Chips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[1290px]" data-name="Chips">
      <Chip />
      <Chip1 />
      <Chip2 />
      <Chip3 />
      <Chip4 />
    </div>
  );
}

function ChipsWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chips wrapper">
      <Chips />
    </div>
  );
}

function ListItemText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ListItem Text">
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#212121] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Attachements
      </p>
    </div>
  );
}

function ExpandMoreOutlined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ExpandMoreOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ExpandMoreOutlined">
          <path d={svgPaths.p206b7070} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandMoreOutlined />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip pt-[4px] relative shrink-0" data-name="Container">
      <ListItemText />
      <Icon3 />
    </div>
  );
}

function Instance() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Instance #1">
      <Container />
    </div>
  );
}

function Stack() {
  return (
    <div className="content-start flex flex-wrap h-[20px] items-start relative shrink-0" data-name="<Stack>">
      <Instance />
    </div>
  );
}

function ListItemText1() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-ew64yg relative shrink-0 text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Date: `}</p>
      <p className="css-ew64yg relative shrink-0 text-[#3b4960]" style={{ fontVariationSettings: "'wdth' 100" }}>
        November 20, 2025 - 12:00pm...
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center overflow-clip pt-[4px] relative shrink-0" data-name="Container">
      <ListItemText1 />
    </div>
  );
}

function Instance1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Instance #1">
      <Container1 />
    </div>
  );
}

function Stack1() {
  return (
    <div className="content-start flex flex-wrap h-[20px] items-start relative shrink-0" data-name="<Stack>">
      <Instance1 />
    </div>
  );
}

function ListItemContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="List item container">
      <Stack />
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#212121] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <Stack1 />
    </div>
  );
}

function ListItemText2() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-center leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-ew64yg relative shrink-0 text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Surface type:
      </p>
      <p className="css-ew64yg relative shrink-0 text-[#3b4960]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2G
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center overflow-clip pt-[4px] relative shrink-0" data-name="Container">
      <ListItemText2 />
    </div>
  );
}

function Instance2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Instance #1">
      <Container2 />
    </div>
  );
}

function Stack2() {
  return (
    <div className="content-start flex flex-wrap h-[20px] items-start relative shrink-0" data-name="<Stack>">
      <Instance2 />
    </div>
  );
}

function ListItemText3() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-center leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-ew64yg relative shrink-0 text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>{`List item: `}</p>
      <p className="css-ew64yg relative shrink-0 text-[#1f2d44]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Secondary
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center overflow-clip pt-[4px] relative shrink-0" data-name="Container">
      <ListItemText3 />
    </div>
  );
}

function Instance3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Instance #1">
      <Container3 />
    </div>
  );
}

function Stack3() {
  return (
    <div className="content-start flex flex-wrap h-[20px] items-start relative shrink-0" data-name="<Stack>">
      <Instance3 />
    </div>
  );
}

function ListItemText4() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-center leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px]" data-name="ListItem Text">
      <p className="css-ew64yg relative shrink-0 text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Description: `}</p>
      <p className="css-ew64yg relative shrink-0 text-[#3b4960]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Secondary...
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center overflow-clip pt-[4px] relative shrink-0" data-name="Container">
      <ListItemText4 />
    </div>
  );
}

function Instance4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Instance #1">
      <Container4 />
    </div>
  );
}

function Stack4() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] h-[20px] items-start relative shrink-0" data-name="<Stack>">
      <Instance4 />
    </div>
  );
}

function ListItems() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="List items">
      <ListItemContainer />
      <Stack2 />
      <Stack3 />
      {[...Array(2).keys()].map((_, i) => (
        <Stack4 key={i} />
      ))}
    </div>
  );
}

function ListItemsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="List items container">
      <ListItems />
    </div>
  );
}

function ChipsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Chips container">
      <ChipsWrapper />
      <ListItemsContainer />
    </div>
  );
}

function TitleAndContents() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Title and contents">
      <HeaderTextContainer />
      <SpacingVertical1 />
      <ChipsContainer />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Frame">
      <div className="absolute bottom-0 left-1/2 top-0 translate-x-[-50%] w-[24px]" data-name="spacer" />
    </div>
  );
}

function SpacingHorizontal2() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0" data-name="Spacing | Horizontal">
      <Frame2 />
    </div>
  );
}

function FormLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<FormLabel>">
      <p className="css-ew64yg font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3b4960] text-[14px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function Slide() {
  return (
    <div className="absolute content-stretch flex items-center left-0 opacity-38 p-[12px] top-0" data-name="Slide">
      <div className="bg-[#3b4960] h-[14px] rounded-[100px] shrink-0 w-[34px]" data-name="Slide" />
    </div>
  );
}

function Knob() {
  return (
    <div className="absolute left-0 size-[38px] top-0" data-name="Knob">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Knob">
          <g filter="url(#filter0_ddd_41_5045)" id="Knob_2">
            <circle cx="19" cy="19" fill="var(--fill-0, #FAFAFA)" r="10" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_ddd_41_5045" width="26" x="6" y="7">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_dropShadow_41_5045" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_41_5045" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
            <feBlend in2="effect1_dropShadow_41_5045" mode="normal" result="effect2_dropShadow_41_5045" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="effect2_dropShadow_41_5045" mode="normal" result="effect3_dropShadow_41_5045" />
            <feBlend in="SourceGraphic" in2="effect3_dropShadow_41_5045" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Switch() {
  return (
    <div className="h-[38px] relative shrink-0 w-[58px]" data-name="Switch">
      <Slide />
      <Knob />
    </div>
  );
}

function Switch1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="<Switch>">
      <Switch />
    </div>
  );
}

function FormControlLabelSwitch() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="<FormControlLabel> | Switch">
      <FormLabel />
      <Switch1 />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label container">
      <FormControlLabelSwitch />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[8px]" data-name="Frame">
      <div className="absolute bottom-0 left-1/2 top-0 translate-x-[-50%] w-[8px]" data-name="spacer" />
    </div>
  );
}

function SpacingHorizontal3() {
  return (
    <div className="content-stretch flex flex-col h-[4px] items-start relative shrink-0" data-name="Spacing | Horizontal">
      <Frame3 />
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="css-ew64yg font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#3b4960] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f1f2f3] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button container">
      <Button />
    </div>
  );
}

function MoreVertOutlined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="MoreVertOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MoreVertOutlined">
          <path d={svgPaths.p24b71d80} fill="var(--fill-0, #3B4960)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <MoreVertOutlined />
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#f1f2f3] content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="<IconButton>">
      <Icon4 />
    </div>
  );
}

function IconButtonContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon button container">
      <IconButton />
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Box">
      <TitleAndContents />
      <SpacingHorizontal2 />
      <LabelContainer />
      <SpacingHorizontal3 />
      <ButtonContainer />
      <SpacingHorizontal3 />
      <IconButtonContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header container">
      <Box />
    </div>
  );
}

function SpacerAutoLayout() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Spacer auto layout">
      <SpacingVertical />
      <HeaderContainer />
      <SpacingVertical />
    </div>
  );
}

export default function CustomPageHeading() {
  return (
    <div className="content-stretch flex items-start py-[16px] relative size-full" data-name="_Custom / Page Heading">
      <SpacingHorizontal />
      <SpacerAutoLayout />
      <SpacingHorizontal />
    </div>
  );
}