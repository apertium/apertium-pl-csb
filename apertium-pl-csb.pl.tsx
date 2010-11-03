<?xml version="1.0" encoding="UTF-8"?>
<tagger name="polish">
<tagset>
  <def-label name="CNJCOO" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label> 
  <def-label name="CNJADV" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label> 
  <def-label name="CNJSUB" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label> 
  <def-label name="IJ">
    <tags-item tags="ij"/>
  </def-label> 
  <def-label name="TAKNIEADV">
    <tags-item lemma="tak" tags="adv"/>
    <tags-item lemma="nie" tags="adv"/>
  </def-label> 
  <def-label name="TAKNIEIJ">
    <tags-item lemma="tak" tags="ij"/>
    <tags-item lemma="nie" tags="ij"/>
  </def-label> 
  <def-label name="ADV">
    <tags-item tags="adv"/>
    <tags-item tags="adv.sint"/>
    <tags-item tags="adv.sint.comp"/>
    <tags-item tags="adv.sint.sup"/>
  </def-label> 
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="PO" closed="true">
    <tags-item lemma="po" tags="pr"/>
  </def-label> 
  <def-label name="VBSER" closed="true">
    <tags-item lemma="być" tags="vbser"/>
  </def-label> 
  <def-label name="PRCASELESS" closed="true">
    <tags-item lemma="jako" tags="pr"/>
  </def-label> 
  <def-label name="GENPR" closed="true">
    <tags-item lemma="do" tags="pr"/>
    <tags-item lemma="od" tags="pr"/>
    <tags-item lemma="aż od" tags="pr"/>
    <tags-item lemma="mimo" tags="pr"/>
    <tags-item lemma="z" tags="pr.gen"/>
    <tags-item lemma="bez" tags="pr"/>
    <tags-item lemma="spod" tags="pr"/>
    <tags-item lemma="sponad" tags="pr"/>
    <tags-item lemma="spomiędzi" tags="pr"/>
    <tags-item lemma="u" tags="pr"/>
    <tags-item lemma="dla" tags="pr"/>
    <tags-item lemma="około" tags="pr"/>
    <tags-item lemma="podczas" tags="pr"/>
    <tags-item lemma="zamiast" tags="pr"/>
    <tags-item lemma="z wyjątkiem" tags="pr"/>
  </def-label> 
  <def-label name="DATPR" closed="true">
    <tags-item lemma="ku" tags="pr"/>
    <tags-item lemma="dzięki" tags="pr"/>
  </def-label> 
  <def-label name="ACCPR" closed="true">
    <tags-item lemma="po" tags="pr"/>
    <tags-item lemma="pod" tags="pr"/>
    <tags-item lemma="popod" tags="pr"/>
    <tags-item lemma="o" tags="pr"/>
    <tags-item lemma="w" tags="pr"/>
    <tags-item lemma="na" tags="pr"/>
    <tags-item lemma="nad" tags="pr"/>
    <tags-item lemma="przed" tags="pr"/>
    <tags-item lemma="za" tags="pr"/>
    <tags-item lemma="bez względu na" tags="pr"/>
  </def-label> 
  <def-label name="LOCPR" closed="true">
    <tags-item lemma="w" tags="pr"/>
    <tags-item lemma="na" tags="pr"/>
    <tags-item lemma="o" tags="pr"/>
  </def-label> 
  <def-label name="INSPR" closed="true">
    <tags-item lemma="z" tags="pr.ins"/>
    <tags-item lemma="międzi" tags="pr"/>
    <tags-item lemma="nad" tags="pr"/>
    <tags-item lemma="pod" tags="pr"/>
    <tags-item lemma="przed" tags="pr"/>
    <tags-item lemma="za" tags="pr"/>
  </def-label> 
  <def-label name="P3DETPOS" closed="true">
    <tags-item lemma="jej" tags="det.pos.adv"/>
    <tags-item lemma="jego" tags="det.pos.adv"/>
    <tags-item lemma="ich" tags="det.pos.adv"/>
  </def-label> 

  <def-label name="PRPERS" closed="true">
    <tags-item lemma="prpers" tags="prn.*"/>
  </def-label> 

  <def-label name="P3PRNNONPR" closed="true">
    <tags-item lemma="prpers" tags="prn.emph.p3.mp.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mp.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.nt.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.nt.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.ma.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.ma.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mi.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mi.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mf.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mf.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.f.sg.dat"/>
  </def-label> 

  <def-label name="ADJPO" closed="true">
    <tags-item tags="adj.po"/>
  </def-label> 

  <def-mult name="PRNIEGOEMPHNT" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.emph.p3.nt.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRNIEGOEMPHM" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.emph.p3.mp.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRNIEGONT" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.p3.nt.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRNIEGOOM" closed="true">  
    <sequence>
      <label-item label="PR"/>
      <tags-item tags="prn.p3.mp.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="ADJENCSER" closed="true">  
    <sequence>
      <tags-item tags="adj.*"/>
      <tags-item tags="vbser.pres.*"/>
    </sequence>
  </def-mult>
</tagset>

<forbid>
  <label-sequence>
    <label-item label="PR"/>
    <label-item label="P3PRNNONPR"/>
  </label-sequence>
  <label-sequence>
    <label-item label="VBSER"/>
    <label-item label="ADJENCSER"/>
  </label-sequence>
  <label-sequence>
    <label-item label="PR"/>
    <label-item label="ADJENCSER"/>
  </label-sequence>
</forbid>

<enforce-rules>
  <enforce-after label="PR">
    <label-set>
      <label-item label="P3DETPOS"/>
    </label-set>
  </enforce-after>
  <enforce-after label="PO">
    <label-set>
      <label-item label="ADJPO"/>
    </label-set>
  </enforce-after>
</enforce-rules>

<preferences>
  <prefer tags="prn.emph.p3.nt.sg.gen"/>
  <prefer tags="prn.emph.p3.nt.sg.dat"/>
  <prefer tags="prn.emph.p3.nt.sg.acc"/>
  <prefer tags="prn.emph.p3.nt.sg.ins"/>
  <prefer tags="prn.emph.p3.nt.sg.loc"/>
  <prefer tags="prn.emph.p3.mp.pl.gen"/>
  <prefer tags="prn.emph.p3.mp.pl.dat"/>
  <prefer tags="prn.emph.p3.mp.pl.acc"/>
  <prefer tags="prn.emph.p3.mp.pl.ins"/>
  <prefer tags="prn.emph.p3.mp.pl.loc"/>
  <prefer tags="vbhaver.imperf.pres.p3.sg"/>
  <prefer tags="vbhaver.imperf.pres.p3.pl"/>
</preferences>
</tagger>
